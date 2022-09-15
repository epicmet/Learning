import type { Shape } from "./types";
import { renderButton } from "./render";
import { Circle, Square } from "./shape-factory";
import "./style.css";

// const appDiv = document.querySelector("#app") as HTMLDivElement;
const shapeSelectorsDiv = document.querySelector(
  "#shape-selectors"
) as HTMLDivElement;
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("Could not get canvas element");
}

const shapes: Shape[] = [
  {
    name: "Circle",
    draw: () => {
      const circle = new Circle();
      circle.draw(canvas, ctx);
    },
  },
  {
    name: "Square",
    draw: () => {
      const square = new Square();
      square.draw(canvas, ctx);
    },
  },
];

shapes.forEach((s) => {
  renderButton(s, shapeSelectorsDiv, ctx);
});
