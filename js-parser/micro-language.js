/*
  Add:      (+ 10 2)
  Subtract: (- 10 2)
  Multiply: (* 10 2)
  Divide:   (/ 10 2)

  Nest calculations: (+ (* 10 2) (- (/ 50 3) 2))
*/

const { digits, str, choice, sequenceOf, between, lazy } = require("./index");

const betweenBrackets = between(str("("), str(")"));

const numberParser = digits.map((result) => ({
  type: "number",
  value: Number(result),
}));
const operatorParser = choice([str("*"), str("/"), str("+"), str("-")]);

const expr = lazy(() => choice([numberParser, operationParser]));

const operationParser = betweenBrackets(
  sequenceOf([operatorParser, str(" "), expr, str(" "), expr])
).map((result) => ({
  type: "operation",
  value: { op: result[0], a: result[2], b: result[4] },
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
