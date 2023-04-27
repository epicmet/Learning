function loop(val, con, update, func) {
  for(let i = val; con(i); i = update(i)) {
    func(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
