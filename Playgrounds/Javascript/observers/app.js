const container = document.querySelector(".boxes");

const INITIAL_BOXES = 1;

for (let i = 0; i < INITIAL_BOXES; i++) {
  const div = document.createElement("div");
  div.textContent = i;
  div.classList.add("box");
  container.appendChild(div);
}

const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const updateContentBtn = document.querySelector("#update-content");
const updateAttrBtn = document.querySelector("#update-attr");

addBtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.textContent = container.children.length;
  div.classList.add("box");
  container.appendChild(div);

  if (container.children.length > 0 && removeBtn.disabled) {
    removeBtn.disabled = false;
  }
});

removeBtn.addEventListener("click", () => {
  container.removeChild(container.lastElementChild);
  if (container.children.length === 0) {
    removeBtn.disabled = true;
  }
});

updateContentBtn.addEventListener("click", () => {
  const boxes = container.children;
  const randIdx = Math.floor(Math.random() * boxes.length);

  boxes[randIdx].classList.toggle("box--change");
  setTimeout(() => {
    boxes[randIdx].classList.toggle("box--change");
  }, 120);

  boxes[randIdx].textContent = Math.random().toFixed(2);
});

updateAttrBtn.addEventListener("click", () => {
  const boxes = container.children;
  const randIdx = Math.floor(Math.random() * boxes.length);

  // boxes[randIdx].classList.toggle("box--change");
  // setTimeout(() => {
  //   boxes[randIdx].classList.toggle("box--change");
  // }, 120);

  // boxes[randIdx].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  boxes[randIdx].setAttribute("data-foo", `${Math.random().toFixed(2)}`);
});

/////////////////////////////////////////////////////////////////////////////

const observer = new MutationObserver((mutations) => {
  const id = parseInt((Date.now() * Math.random()).toString().slice(0, 2));
  console.log(`>>-------- ${id} -------->>`);

  mutations.forEach((mutation) => {
    console.log(mutation);
  });

  console.log(`<<-------- ${id} --------<<`);
});

observer.observe(container, {
  childList: true,
  subtree: true,
});
