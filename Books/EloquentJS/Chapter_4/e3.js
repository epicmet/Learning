const arrayToList = (arr) => {
  let tempObjs = [];
  for(let el of arr) {
    tempObjs.push({value: el, rest:null});
  }
  for(let i = tempObjs.length - 2; i >= 0; i--) {
    tempObjs[i].rest = tempObjs[i+1];
  }
  return tempObjs[0];
}

const listToArray = (list) => {
  const resultArr = [];
  do {
    resultArr.push(list.value);
    list = list.rest;
  } while(list !== null);
  return resultArr;
}

const prepend = (newVal, list) => {
  return { value: newVal, rest: list }
}

const nth = (list, n) => {
  let val;
  for(let i = 0; i <= n; i++) {
    if(list !== null) val = list.value;
    else val = undefined;

    list = list.rest;
  }
  return val;
}

const recursiveNth = (list, n) => {
  if(!list) return undefined;

  let {value} = list;
  if(n === 0) return value;

  list = list.rest;
  return recursiveNth(list, n - 1);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40]), 1));
// → 20
