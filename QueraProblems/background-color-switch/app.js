const buttons = document.querySelectorAll(".button");
for (btn of buttons) {
  btn.addEventListener("click", (e) => {
    color = e.target.id;
    document.body.style.backgroundColor = color;
  });
}
