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
  resultArr.push(list.value);
  
  let { rest } = list;
  while(rest !== null) {
    resultArr.push(rest.value);
    rest = rest.rest;
  }
  return resultArr;
}

const prepend = (newVal, list) => {
  return { value: newVal, rest: list }
}

const nth = (list, n) => {
  if(n === 0) return list.value;
  
  let rest;
  for(let i = 1; i <= n; i++) {
    if(i === 1) rest = list.rest;
    else rest = rest.rest;
  }
  
  return rest ? rest.value : undefined;
}
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40]), 0));
// → 20
