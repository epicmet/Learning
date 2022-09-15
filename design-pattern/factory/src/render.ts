import type { Shape } from "./types";
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

export function renderButton(
  elInfo: Shape,
  parent: HTMLElement,
  canvasContext: CanvasRenderingContext2D
) {
  const { name, draw } = elInfo;

  const button = document.createElement("button");

  button.textContent = name;

  button.onclick = () => {
    const { width, height } = canvas;

    canvasContext.clearRect(0, 0, width, height);
    canvasContext.rect(0, 0, width, height);
    canvasContext.fillStyle = "#242424";
    canvasContext.fill();

    draw(canvasContext);
  };

  parent.append(button);
}
