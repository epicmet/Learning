import { produce } from "immer";

const book = { title: "Eloquent JS" };

function publish() {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

const updated = publish();

console.log(book);
console.log(updated);
