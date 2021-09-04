const deepEqual = (first , second) => {
  if(first === null || second === null) return false;
  
  if(typeof first !== 'object' || typeof second !== 'object') return first === second;
  else {
  	const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    const firstValues = Object.values(first);
    const secondValues = Object.values(second);
    
    for(let key of firstKeys) {
      if(!secondKeys.includes(key) || !deepEqual(first[key], second[key])) return false;
    }
    return true;
  }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
