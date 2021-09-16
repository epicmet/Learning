const person = {
  name: "John",
  address: {
    contry: "Iran",
    city: "Teh",
  },
};

const newPerson = { ...person, address: { ...person.address } };
newPerson.address.city = "New York";

console.log(person);
