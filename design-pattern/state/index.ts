interface Tool {
  mouseDown(): void;
  mouseUp(): void;
}
class SelectionTool implements Tool {
  mouseDown(): void {
    console.log("Show selection cursor")
  }

  mouseUp(): void {
    console.log("Draw dashed rectanlge")
  }
}

class BrushTool implements Tool {
  mouseDown(): void {
    console.log("Show brush cursor")
  }

  mouseUp(): void {
    console.log("Draw a line")
  }
}

class Canvas {
  private _currTool: Tool;

  constructor(tool: Tool) {
    this._currTool = tool;
  }

  get currTool() {
    return this._currTool;
  }

  set currTool(newTool: Tool) {
    this._currTool = newTool;
  }

  mouseDown() {
    this._currTool.mouseDown();
  }

  mouseUp() {
    this._currTool.mouseUp();
  }
}

const canvas = new Canvas(new SelectionTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.currTool = new BrushTool();
canvas.mouseDown();
canvas.mouseUp();
