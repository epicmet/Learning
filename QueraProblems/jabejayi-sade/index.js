const square = document.querySelector("#square");

document.body.addEventListener("keydown", (e) => {
  const currKey = e.key;
  let currTop = getComputedStyle(square).top;
  let currLeft = getComputedStyle(square).left;

  switch (currKey) {
    case "ArrowUp":
      currTop = currTop.slice(0, currTop.indexOf("p"));

      if (e.shiftKey) {
        square.style.top = Number(currTop) - 10 + "px";
      } else {
        square.style.top = Number(currTop) - 1 + "px";
      }

      break;

    case "ArrowDown":
      currTop = currTop.slice(0, currTop.indexOf("p"));

      if (e.shiftKey) {
        square.style.top = Number(currTop) + 10 + "px";
      } else {
        square.style.top = Number(currTop) + 1 + "px";
      }
      break;

    case "ArrowRight":
      currLeft = currLeft.slice(0, currLeft.indexOf("p"));
      if (e.shiftKey) {
        square.style.left = Number(currLeft) + 10 + "px";
      } else {
        square.style.left = Number(currLeft) + 1 + "px";
      }
      break;

    case "ArrowLeft":
      currLeft = currLeft.slice(0, currLeft.indexOf("p"));
      if (e.shiftKey) {
        square.style.left = Number(currLeft) - 10 + "px";
      } else {
        square.style.left = Number(currLeft) - 1 + "px";
      }
      break;

    default:
      break;
  }
});
