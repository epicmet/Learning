import { Map } from "immutable";

let book = Map({ title: "Eloquent JS" });

function publish() {
  return book.set("isPublished", true);
}

book = publish();

console.log(book.toJS());
