import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));
