import { pipe } from "lodash/fp";

const input = { tag: "JAVASCRIPT" };

const getEl = (key) => (obj) => obj[key];
const toLowerCase = (str) => str.toLowerCase();
const addParentheses = (str) => `(${str})`;

const fn = pipe(getEl("tag"), toLowerCase, addParentheses);
const result = fn(input);
console.log(result);
