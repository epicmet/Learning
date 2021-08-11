let currPlayer = "blue";
document.querySelector("#player_turn").innerHTML = currPlayer;

const mouseEnter = (elements) => {
  elements.forEach((line) => {
    line.addEventListener("mouseenter", (e) => {
      e.target.classList.add(currPlayer);
    });
  });
};

//TODO: probable bug!
const mouseLeave = (elements) => {
  elements.forEach((line) => {
    line.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("blue");
      e.target.classList.remove("red");
    });
  });
};

const click = (elements) => {
  elements.forEach((line) => {
    line.addEventListener("click", (e) => {
      if (e.target.classList.contains("dot")) return;
      if (e.target.style.backgroundColor) return;

      if (currPlayer === "red") {
        e.target.style.backgroundColor = "#fa8072";
      } else if (currPlayer === "blue") {
        e.target.style.backgroundColor = "#87ceeb";
      }

      document.querySelector("#player_turn").innerHTML = changePlayer();
    });
  });
};

const changePlayer = () => {
  let res = currPlayer === "red" ? "blue" : "red";
  currPlayer = res;
  return res;
};

const horizontalLine = document.querySelectorAll(".horizontal_line");
const verticalLine = document.querySelectorAll(".vertical_line");

mouseEnter(horizontalLine);
mouseEnter(verticalLine);
mouseLeave(horizontalLine);
mouseLeave(verticalLine);
click(horizontalLine);
click(verticalLine);
