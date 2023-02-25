const subscription = new EventSource("/subscribe");

subscription.addEventListener("open", () => {
  console.log("Connection opened");
});

subscription.addEventListener("error", () => {
  console.error("Subscription err'd");
});

const list = document.getElementById("sse-list");

subscription.addEventListener("current-date", (event) => {
  const listItem = document.createElement("li");
  listItem.innerText = event.data;

  list.append(listItem);
});
