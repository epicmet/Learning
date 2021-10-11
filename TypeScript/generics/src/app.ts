function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "matthew" }, { mood: "network stuff rocks!" }));

const myVeryOwnPromise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res("heyyyyyo");
  }, 2000);
});

myVeryOwnPromise.then((res) => res.charAt(9));
