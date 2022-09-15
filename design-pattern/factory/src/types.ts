export interface Shape {
  name: string;
  draw(context: CanvasRenderingContext2D): void;
}
