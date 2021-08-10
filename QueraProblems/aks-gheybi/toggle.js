function toggle_btn_img() {
  const toggleBtn = document.querySelector("#btn");
  const img = document.querySelector("#avatar");
  if (toggleBtn.innerHTML.trim() === "Show!") {
    toggleBtn.innerHTML = "Hide!";
    img.classList.remove("w3-hide");
  } else if (toggleBtn.innerHTML.trim() === "Hide!") {
    toggleBtn.innerHTML = "Show!";
    img.classList.add("w3-hide");
  }
}
