const main = document.getElementById("root");

function renderProducts(products) {
  main.innerHTML = products
    .map(
      (product) => `<div class="product" data-product-id="${product.id}">
                    <h1>${product.title}</h1>
                    <p class="price">${product.price} تومان</p>
                    <p class="date">${product.date}</p>
                  </div>`
    )
    .join("");
}

const products = [
  {
    id: 1,
    title: "محصول اول",
    price: "32000",
    date: "1596902113",
  },
  {
    id: 2,
    title: "محصول دوم",
    price: "46000",
    date: "1555891200",
  },
  {
    id: 3,
    title: "محصول سوم",
    price: "20000",
    date: "1515369600",
  },
  {
    id: 4,
    title: "محصول چهارم",
    price: "88000",
    date: "1509580800",
  },
  {
    id: 5,
    title: "محصول پنجم",
    price: "11000",
    date: "1477267200",
  },
];

renderProducts(products);

document
  .getElementById("changeProducts")
  .addEventListener("click", changeProducts);

function setDate(sec) {
  let newDate = new Date(sec * 1000).toLocaleDateString();
  return newDate;
}
function changeProducts() {
  let newProducts = [
    {
      id: 1,
      title: "محصول اول",
      price: "16000",
      date: setDate(1596902113),
    },
    {
      id: 2,
      title: "محصول دوم",
      price: "23000",
      date: setDate(1555891200),
    },
    {
      id: 3,
      title: "محصول سوم",
      price: "10000",
      date: setDate(1515369600),
    },
    {
      id: 4,
      title: "محصول چهارم",
      price: "44000",
      date: setDate(1509580800),
    },
    {
      id: 5,
      title: "محصول پنجم",
      price: "5500",
      date: setDate(1477267200),
    },
  ];
  renderProducts(newProducts);
}
