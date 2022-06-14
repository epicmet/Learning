const coords: [x: number, y: number] = [0, 0];

function parseInput(inputCoords: string): void {
  inputCoords.split("\n").forEach((line) => {
    const [direction, value] = line.split(" ");

    move(direction, parseInt(value));
  });

  console.log(coords[0] * coords[1]);
}

function move(dir: string, val: number): void {
  switch (dir) {
    case "up":
      coords[1] = coords[1] - val;
      break;

    case "down":
      coords[1] = coords[1] + val;
      break;

    case "forward":
      coords[0] = coords[0] + val;
      break;

    case "backward":
      coords[0] = coords[0] - val;
      break;
  }
}

////////

parseInput(`forward 5
down 5
forward 8
up 3
down 8
forward 2`);
