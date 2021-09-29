let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Matts";

if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number): never {
  throw { message, code };
}

generateError("something went wrong!", 500);
