const CHANGE_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
};
const ERROR_TYPE = {
  NOT_FOUND: "NOT_FOUND",
  NOT_POSSIBLE: "NOT_POSSIBLE",
  INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

const renderNums = (arr) => {
  document.querySelector("#numbers-container").innerHTML = "";
  for (num of arr) {
    const span = document.createElement("span");
    span.innerHTML = String(num);
    numbersContainer.appendChild(span);
  }
};

const numbersContainer = document.querySelector("#numbers-container");
renderNums(numbers);

const submitBtn = document.querySelector("#submit-btn");
const itemInput = document.querySelector("#item-input");
const countInput = document.querySelector("#count-input");

let dir = "UP";
const checkboxes = document.querySelectorAll("input[name]");
for (let c of checkboxes) {
  c.addEventListener("click", () => {
    dir = c.value;
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (itemInput.value === "" || countInput.value === "") {
    addError(ERROR_TYPE.INVALID_INPUT);
    return;
  }

  if (!numbers.includes(Number(itemInput.value))) {
    addError(ERROR_TYPE.NOT_FOUND);
    return;
  }

  clearError();

  moveNum(itemInput.value, countInput.value, dir);
});

const addError = (errType) => {
  clearError();
  const p = document.createElement("p");
  p.id = "error";
  p.innerHTML = errType;
  document.querySelector("#error-container").appendChild(p);
};

const clearError = () => {
  if (document.querySelector("#error")) {
    document.querySelector("#error").remove();
  }
};

const moveNum = (num, count, dir) => {
  num = Number(num);
  count = Number(count);
  const numIndex = numbers.indexOf(num);
  let nextIndex = null;

  if (dir === "UP") {
    nextIndex = numIndex + count;
    if (nextIndex >= numbers.length) {
      addError(ERROR_TYPE.NOT_POSSIBLE);
      return;
    }
  } else if (dir === "DOWN") {
    nextIndex = numIndex - count;
    if (nextIndex < 0) {
      addError(ERROR_TYPE.NOT_POSSIBLE);
      return;
    }
  }

  numbers.splice(numIndex, 1);
  numbers.splice(nextIndex, 0, num);

  renderNums(numbers);
};
