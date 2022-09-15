import type { Shape } from "./types";

abstract class Creator {
  public abstract draw(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ): void;
}

class Circle implements Shape {
  name = "Circle";

  draw(ctx: CanvasRenderingContext2D) {
    // const centerX = canvas.width / 2;
    // const centerY = canvas.height / 2;
    const radius = 70;

    ctx.beginPath();
    ctx.arc(150, 75, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

class Square extends Creator {
  draw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.rect(0, 0, centerX, centerY);
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

export { Circle, Square };
