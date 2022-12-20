const {
  Parser,
  updateParserError,
  updateParserState,
  sequenceOf,
} = require("./lib");

const Bit = new Parser((parserState) => {
  if (parserState.isError) {
    return parserState;
  }

  const byteOffset = Math.floor(parserState.index / 8);

  if (byteOffset >= parserState.target.byteLength) {
    return updateParserError(parserState, `Bit: Unexpected end of input`);
  }

  const byte = parserState.target.getUint8(byteOffset);
  const bitOffset = 7 - (parserState.index % 8);

  const result = (byte & (1 << bitOffset)) >> bitOffset;

  return updateParserState(parserState, parserState.index + 1, result);
});

const Zero = new Parser((parserState) => {
  if (parserState.isError) {
    return parserState;
  }

  const byteOffset = Math.floor(parserState.index / 8);

  if (byteOffset >= parserState.target.byteLength) {
    return updateParserError(parserState, `Zero: Unexpected end of input`);
  }

  const byte = parserState.target.getUint8(byteOffset);
  const bitOffset = 7 - (parserState.index % 8);

  const result = (byte & (1 << bitOffset)) >> bitOffset;

  if (result !== 0) {
    return updateParserError(
      parserState,
      `Zero: Expected a 0 but got a 1 at index "${parserState.index}"`
    );
  }

  return updateParserState(parserState, parserState.index + 1, result);
});

const One = new Parser((parserState) => {
  if (parserState.isError) {
    return parserState;
  }

  const byteOffset = Math.floor(parserState.index / 8);

  if (byteOffset >= parserState.target.byteLength) {
    return updateParserError(parserState, `One: Unexpected end of input`);
  }

  const byte = parserState.target.getUint8(byteOffset);
  const bitOffset = 7 - (parserState.index % 8);

  const result = (byte & (1 << bitOffset)) >> bitOffset;

  if (result !== 1) {
    return updateParserError(
      parserState,
      `One: Expected a 1 but got a 0 at index "${parserState.index}"`
    );
  }

  return updateParserState(parserState, parserState.index + 1, result);
});

/* --- USAGE --- */

const parser = sequenceOf([One, One, One, Zero, One, Zero, One, Zero]);

const data = new Uint8Array([234, 235]).buffer;
const dataView = new DataView(data);

const result = parser.run(dataView);

console.log(result);
