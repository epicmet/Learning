const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

const newRecepie = { ...recipe, ingredients: [...recipe.ingredients, "cream"] };

newRecepie.ingredients = newRecepie.ingredients.map((i) =>
  i === "egg" ? "egg white" : i
);

console.log(newRecepie);
