/// etelate quera kamel nist
var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan",
];

const autoCompleteItemsDiv = document.createElement("div");
autoCompleteItemsDiv.classList.add("autocomplete-items");
document.querySelector(".autocomplete").appendChild(autoCompleteItemsDiv);

const input = document.querySelector("#myInput");
input.addEventListener("input", (e) => {
  const value = e.target.value;
  const cityArr = checkCity(value);

  document
    .querySelector(".autocomplete-items")
    .querySelectorAll("div")
    .forEach((n) => n.removeEventListener("click", clickEvent));

  document
    .querySelector(".autocomplete-items")
    .querySelectorAll("div")
    .forEach((n) => n.remove());

  if (cityArr === "") return;

  if (cityArr.length === 0) {
    const div = document.createElement("div");
    div.innerHTML = "Not Found!‍";
    div.classList.add("not-found");
    document.querySelector(".autocomplete-items").appendChild(div);
  } else {
    for (let city of cityArr) {
      const div = document.createElement("div");
      div.innerHTML = city;
      div.classList.add("item");
      div.addEventListener("click", clickEvent);
      document.querySelector(".autocomplete-items").appendChild(div);
    }
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.classList[0] === "container") {
    document
      .querySelector(".autocomplete-items")
      .querySelectorAll("div")
      .forEach((n) => n.removeEventListener("click", clickEvent));

    document
      .querySelector(".autocomplete-items")
      .querySelectorAll("div")
      .forEach((n) => n.remove());
  }
});

const checkCity = (value) => {
  let res = [];
  if (value === "") return "";
  for (let city of arr) {
    if (city.startsWith(value)) {
      res.push(city);
    }
  }
  return res;
};

const clickEvent = (e) => {
  input.value = e.target.innerHTML;
};
