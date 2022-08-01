export function fizzBuzz(num: i32): String | null {
  if (num % 15 === 0) {
    return "fizzbuzz";
  }

  if (num % 3 === 0) {
    return "fizz";
  }

  if (num % 5 === 0) {
    return "buzz";
  }

  return null;
}
