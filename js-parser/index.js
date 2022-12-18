const updateParserState = (state, index, result) => ({
  ...state,
  index,
  result,
});

const updateParserResult = (state, result) => ({
  ...state,
  result,
});

const updateParserError = (state, errorMsg) => ({
  ...state,
  error: errorMsg,
  isError: true,
});

const str = (s) => (parserState) => {
  const { targetString, index, isError } = parserState;

  if (isError) {
    return parserState;
  }

  const slicedTarget = targetString.slice(index);

  if (slicedTarget.length === 0) {
    return updateParserError(
      parserState,
      `str: Unexpected end of input. Tried to match "${s}", but got unexpected end of input`
    );
  }

  if (slicedTarget.startsWith(s)) {
    return updateParserState(parserState, index + s.length, s);
  }

  return updateParserError(
    parserState,
    `str: Tried to match "${s}", but got "${targetString.slice(
      index,
      index + 10
    )}"`
  );
};

const sequenceOf = (parsers) => (parserState) => {
  if (parserState.isError) {
    return parserState;
  }

  const results = [];
  let nextState = parserState;

  parsers.forEach((p) => {
    nextState = p(nextState);
    results.push(nextState.result);
  });

  return updateParserResult(parserState, results);
};

const run = (parser, targetString) => {
  const initialState = {
    targetString,
    index: 0,
    result: null,
    error: null,
    isError: false,
  };

  return parser(initialState);
};

/* -- USAGE --- */

// const parser = sequenceOf([str("hello"), str("bye")]);
const parser = str("hello");

console.log(run(parser, ""));
