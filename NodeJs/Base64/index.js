const base64EncodeAlphabet = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T",
  20: "U",
  21: "V",
  22: "W",
  23: "X",
  24: "Y",
  25: "Z",
  26: "a",
  27: "b",
  28: "c",
  29: "d",
  30: "e",
  31: "f",
  32: "g",
  33: "h",
  34: "i",
  35: "j",
  36: "k",
  37: "l",
  38: "m",
  39: "n",
  40: "o",
  41: "p",
  42: "q",
  43: "r",
  44: "s",
  45: "t",
  46: "u",
  47: "v",
  48: "w",
  49: "x",
  50: "y",
  51: "z",
  52: "0",
  53: "1",
  54: "2",
  55: "3",
  56: "4",
  57: "5",
  58: "6",
  59: "7",
  60: "8",
  61: "9",
  62: "+",
  63: "/",
};

const base64DecodeAlphabet = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
  a: 26,
  b: 27,
  c: 28,
  d: 29,
  e: 30,
  f: 31,
  g: 32,
  h: 33,
  i: 34,
  j: 35,
  k: 36,
  l: 37,
  m: 38,
  n: 39,
  o: 40,
  p: 41,
  q: 42,
  r: 43,
  s: 44,
  t: 45,
  u: 46,
  v: 47,
  w: 48,
  x: 49,
  y: 50,
  z: 51,
  0: 52,
  1: 53,
  2: 54,
  3: 55,
  4: 56,
  5: 57,
  6: 58,
  7: 59,
  8: 60,
  9: 61,
  "+": 62,
  "/": 63,
};

const DEBUG = process.env.DEBUG || false;

function delog(...msg) {
  if (!DEBUG) {
    return;
  }

  console.log("    DEBUG: ", ...msg);
}

function encodeBase64(dec) {
  if (typeof dec !== "string") {
    throw new Error(`The input must be a string, but got ${typeof dec}`);
  }

  // FIX: This only works for ASCII, if we read an emoji or other UTF-8 chars,
  // it fails to get its binaries
  // These are the currect bits for the letter "س"
  // const bits = [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1];

  const bits = [];
  for (let i = 0; i < dec.length; i++) {
    const charCode = dec.charCodeAt(i);

    // FIXME: All chars are not 8 bits.
    for (let j = 7; j >= 0; j--) {
      bits.push((charCode >> j) & 1);
    }
  }
  delog(dec, bits.join(""), bits.length);

  const res = [];

  for (let i = 0; i < bits.length; ) {
    let padding = "";

    const slicedBits = bits.slice(i, (i += 6));

    if (slicedBits.length < 6) {
      switch (slicedBits.length) {
        case 4: {
          padding = "=";
          slicedBits.push(0, 0);
          break;
        }
        case 2: {
          padding = "==";
          slicedBits.push(0, 0, 0, 0);
          break;
        }
        default: {
          throw new Error(`Unable to encode -> ${dec}`);
        }
      }
    }

    const val = parseInt(slicedBits.join(""), 2);

    // TODO: What if the val does not exists on the map. (the val is more than 63)
    res.push(base64EncodeAlphabet[val.toString()]);

    delog(`${slicedBits.join("")} => ${val} => ${base64EncodeAlphabet[val]}`);

    if (padding !== "") {
      delog(`Adding "${padding}" padding`);
      res.push(padding);

      padding = "";
    }
  }

  return res.join("");
}

function decodeBase64(enc) {
  if (typeof enc !== "string") {
    throw new Error(`The input must be a string, but got ${typeof enc}`);
  }

  const trimedEnc = enc.replace(/=/g, "");
  delog(`Padding removal: ${enc} -> ${trimedEnc}`);

  const bits = [];
  for (let i = 0; i < trimedEnc.length; i++) {
    const char = trimedEnc[i];

    let sixBitCharCode = base64DecodeAlphabet[char].toString(2);
    if (sixBitCharCode.length < 6) {
      sixBitCharCode = sixBitCharCode.padStart(6, "0");
    }

    if (i === trimedEnc.length - 1 && trimedEnc !== enc) {
      delog(`Removing padding bits: ${sixBitCharCode}`);
      if (enc.endsWith("==")) {
        delog(`Removing 4 bits from the end caused by "=="`);
        sixBitCharCode = sixBitCharCode.substring(0, sixBitCharCode.length - 4);
      } else if (enc.endsWith("=")) {
        delog(`Removing 2 bits from the end caused by "="`);
        sixBitCharCode = sixBitCharCode.substring(0, sixBitCharCode.length - 2);
      }
    }

    delog({ char, sixBitCharCode });

    bits.push(...sixBitCharCode.split(""));
  }

  const res = [];
  for (let i = 0; i < bits.length; ) {
    const slicedBits = bits.slice(i, (i += 8));
    const charCode = parseInt(slicedBits.join(""), 2);

    const decodedChar = String.fromCharCode(charCode);

    delog(`${slicedBits.join("")} => ${charCode} => ${decodedChar}`);

    res.push(decodedChar);
  }

  return res.join("");
}

///////////// Tests /////////////
function assert(decoded, encoded) {
  // Encode
  const encodedFromDecoded = encodeBase64(decoded);

  console.log(
    `Encode "${decoded}" ${
      encodedFromDecoded === encoded
        ? "Success✅\n\n"
        : `Failure❌\n got: "${encodedFromDecoded}" instead of "${encoded}"\n\n`
    }`,
  );

  // Decode
  const decodedFromEncoded = decodeBase64(encoded);
  console.log(
    `Decode "${encoded}" ${
      decodedFromEncoded === decoded
        ? "Success✅\n\n"
        : `Failure❌\n got: "${decodedFromEncoded}" instead of "${decoded}"\n\n`
    }`,
  );
}

// TODO: Add more edge cases
assert("Akshay", "QWtzaGF5");
assert("FooBarBazQu", "Rm9vQmFyQmF6UXU=");
assert("ThisIsCool", "VGhpc0lzQ29vbA==");

// assert("🤖", "8J+klg==");
// assert("😎", "8J+Yjg==");
// assert("س", "2LM=");
// assert("3", "Mw==");
// assert("b", "Yg==");
