import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";

const trim = (str) => sty.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);
