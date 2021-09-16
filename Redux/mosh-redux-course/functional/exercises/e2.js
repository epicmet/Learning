import { produce } from "immer";

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
};

const newRecipe = produce(recipe, (madeNewRecipe) => {
  madeNewRecipe.ingredients = madeNewRecipe.ingredients.concat(["cream"]);
  madeNewRecipe.ingredients = madeNewRecipe.ingredients.map((i) =>
    i === "egg" ? "egg white" : i
  );
});

console.log(newRecipe);
