const statusDisplay = document.querySelector(".game--status");

let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "") {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);

  if (checkWinner()) {
    statusDisplay.innerHTML = `Player ${currentPlayer} has won`;
    document
      .querySelectorAll(".cell")
      .forEach((cell) => cell.removeEventListener("click", handleCellClick));
  } else if (!checkfreeSpace()) {
    statusDisplay.innerHTML = `Game ended in a draw`;
  } else {
    handlePlayerChange();
  }
}

function handleRestartGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  document
    .querySelectorAll(".cell")
    .forEach((cell) => cell.addEventListener("click", handleCellClick));
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);

function makeHorizontalArrs(arr) {
  let res = [];

  res.push(gameState.slice(0, 3));
  res.push(gameState.slice(3, 6));
  res.push(gameState.slice(6, 9));

  return res;
}

function makeVerticalArrs(arr) {
  let res = [];

  for (let i = 0; i < 3; i++) {
    res.push([gameState[i], gameState[i + 3], gameState[i + 6]]);
  }

  return res;
}

function makeDiagonalArrs(arr) {
  let res = [];

  res.push([gameState[0], gameState[4], gameState[8]]);
  res.push([gameState[2], gameState[4], gameState[6]]);

  return res;
}

function allEqual(arrs) {
  for (let arr of arrs) {
    if (arr[0] !== "") {
      if (arr[0] === arr[1] && arr[1] === arr[2]) return true;
    }
  }
  return false;
}

function checkWinner() {
  let horizontalArrs = makeHorizontalArrs(gameState);
  let verticalArrs = makeVerticalArrs(gameState);
  let diagonalArrs = makeDiagonalArrs(gameState);

  if (allEqual(horizontalArrs)) return true;
  if (allEqual(verticalArrs)) return true;
  if (allEqual(diagonalArrs)) return true;

  return false;
}

function checkfreeSpace() {
  for (let cell of gameState) {
    if (cell === "") return true;
  }
  return false;
}
