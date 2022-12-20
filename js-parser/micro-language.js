/*
  Parser,
  updateParserError,
  updateParserResult,
  updateParserState,
} = require("./lib");

const Bit = new Parser((parserState) => {
  if (parserState.isError) {
    return parserState;
  }

  const byteOffset = Math.floor(parser.index / 8);

  if (byteOffset >= parserState.target.byteLength) {
    return updateParserError(parserState, `Bit: Unexpected end of input`);
  }

  const byte = parserState.target.getUint8(byteOffset);
  const bitOffset = parserState.index % 8;

  const result = (byte & (1 << bitOffset)) >> bitOffset;

  return updateParserState(parserState, parserState.index + 1, result);
});
new Uint8Array([234, 235]
/* --- USAGE --- */

const parser = Bit;

const data = new Uint8Array([234, 235]b: result[4] },
}));

const evaluate = (node) => {
  if (node.type === "number") {
    return node.value;
  }
  if (node.type === "operation") {
    if (node.value.op === "+") {
      return evaluate(node.value.a) + evaluate(node.value.b);
    }

    if (node.value.op === "-") {
      return evaluate(node.value.a) - evaluate(node.value.b);
    }

    if (node.value.op === "*") {
      return evaluate(node.value.a) * evaluate(node.value.b);
    }

    if (node.value.op === "/") {
      return evaluate(node.value.a) / evaluate(node.value.b);
    }
  }
};

////////

const interpreter = (program) => {
  const parsedResult = expr.run(program);

  if (parsedResult.isError) {
    throw new Error("Invalid program");
  }

  return evaluate(parsedResult.result);
};

const program = "(+ (* 10 2) (- (/ 50 3) 2))";

console.log(interpreter(program));
