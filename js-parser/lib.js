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

class Parser {
  constructor(parserStateTransformerFn) {
    this.parserStateTransformerFn = parserStateTransformerFn;
  }

  run(target) {
    const initialState = {
      target,
      index: 0,
      result: null,
      error: null,
      isError: false,
    };

    return this.parserStateTransformerFn(initialState);
  }

  map(fn) {
    return new Parser((parserState) => {
      const nextState = this.parserStateTransformerFn(parserState);
      if (nextState.isError) {
        return nextState;
      }

      return updateParserResult(nextState, fn(nextState.result));
    });
  }

  chain(fn) {
    return new Parser((parserState) => {
      const nextState = this.parserStateTransformerFn(parserState);
      if (nextState.isError) {
        return nextState;
      }

      const nextParser = fn(nextState.result);

      return nextParser.parserStateTransformerFn(nextState);
    });
  }

  errorMap(fn) {
    return new Parser((parserState) => {
      const nextState = this.parserStateTransformerFn(parserState);

      if (!nextState.isError) {
        return nextState;
      }

      return updateParserError(nextState, fn(nextState.error, nextState.index));
    });
  }
}

const str = (s) =>
  new Parser((parserState) => {
    const { target, index, isError } = parserState;

    if (isError) {
      return parserState;
    }

    const slicedTarget = target.slice(index);

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
      `str: Tried to match "${s}", but got "${target.slice(
        index,
        index + 10
      )}"`
    );
  });

const LETTERS_REGEX = /^[A-Za-z]+/;
const letters = new Parser((parserState) => {
  const { target, index, isError } = parserState;

  if (isError) {
    return parserState;
  }

  const slicedTarget = target.slice(index);

  if (slicedTarget.length === 0) {
    return updateParserError(
      parserState,
      `letters: Got unexpected end of input`
    );
  }

  const regexMatch = slicedTarget.match(LETTERS_REGEX);

  if (regexMatch) {
    return updateParserState(
      parserState,
      index + regexMatch[0].length,
      regexMatch[0]
    );
  }

  return updateParserError(
    parserState,
    `letters: Could not match any letter at index "${index}"`
  );
});

const DIGITS_REGEX = /^[0-9]+/;
const digits = new Parser((parserState) => {
  const { target, index, isError } = parserState;

  if (isError) {
    return parserState;
  }

  const slicedTarget = target.slice(index);

  if (slicedTarget.length === 0) {
    return updateParserError(
      parserState,
      `digits: Got unexpected end of input`
    );
  }

  const regexMatch = slicedTarget.match(DIGITS_REGEX);

  if (regexMatch) {
    return updateParserState(
      parserState,
      index + regexMatch[0].length,
      regexMatch[0]
    );
  }

  return updateParserError(
    parserState,
    `digits: Could not match any digit at index "${index}"`
  );
});

const sequenceOf = (parsers) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    const results = [];
    let nextState = parserState;

    for (let p of parsers) {
      nextState = p.parserStateTransformerFn(nextState);
      results.push(nextState.result);
    }

    if (nextState.isError) {
      return nextState;
    }

    return updateParserResult(nextState, results);
  });

const choice = (parsers) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    for (let p of parsers) {
      const nextState = p.parserStateTransformerFn(parserState);
      if (!nextState.isError) {
        return nextState;
      }
    }

    return updateParserError(
      parserState,
      `choice: Unable to match with any parser at index ${parserState.index}`
    );
  });

const many = (parser) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    const results = [];
    let nextState = parserState;
    let done = false;

    while (!done) {
      let testState = parser.parserStateTransformerFn(nextState);

      if (!testState.isError) {
        results.push(testState.result);
        nextState = testState;
      } else {
        done = true;
      }
    }

    return updateParserResult(nextState, results);
  });

const many1 = (parser) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    const results = [];
    let nextState = parserState;
    let done = false;

    while (!done) {
      nextState = parser.parserStateTransformerFn(nextState);

      if (!nextState.isError) {
        results.push(nextState.result);
      } else {
        done = true;
      }
    }

    if (results.length === 0) {
      return updateParserError(
        nextState,
        `many1: Unable to match any input using any parser at index "${parserState.index}"`
      );
    }

    return updateParserResult(nextState, results);
  });

const sepBy = (separatorParser) => (valueParser) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    const results = [];
    let nextState = parserState;

    while (true) {
      const thingWeWantState = valueParser.parserStateTransformerFn(nextState);
      if (thingWeWantState.isError) {
        break;
      }
      results.push(thingWeWantState.result);
      nextState = thingWeWantState;

      const separatorState =
        separatorParser.parserStateTransformerFn(nextState);
      if (separatorState.isError) {
        break;
      }
      nextState = separatorState;
    }

    return updateParserResult(nextState, results);
  });

const sepBy1 = (separatorParser) => (valueParser) =>
  new Parser((parserState) => {
    if (parserState.isError) {
      return parserState;
    }

    const results = [];
    let nextState = parserState;

    while (true) {
      const thingWeWantState = valueParser.parserStateTransformerFn(nextState);
      if (thingWeWantState.isError) {
        break;
      }
      results.push(thingWeWantState.result);
      nextState = thingWeWantState;

      const separatorState =
        separatorParser.parserStateTransformerFn(nextState);
      if (separatorState.isError) {
        break;
      }
      nextState = separatorState;
    }

    if (results.length === 0) {
      return updateParserError(
        parserState,
        `sepBy1: Unable to capture any results at index ${parserState.index}`
      );
    }

    return updateParserResult(nextState, results);
  });

const between = (leftParser, rightParser) => (contentParser) =>
  sequenceOf([leftParser, contentParser, rightParser]).map(
    (results) => results[1]
  );

const lazy = (parserThunk) =>
  new Parser((parserState) => {
    const parser = parserThunk();
    return parser.parserStateTransformerFn(parserState);
  });

const fail = errMsg => new Parser(parserState => {
  return updateParserError(parserState, errMsg);
});

const succeed = value => new Parser(parserState => {
  return updateParserResult(parserState, value);
})

module.exports = {
  str,
  letters,
  digits,
  sequenceOf,
  choice,
  many,
  many1,
  sepBy,
  sepBy1,
  between,
  lazy,
  fail,
  succeed,

  Parser,

  updateParserError,
  updateParserState,
  updateParserResult,
};
