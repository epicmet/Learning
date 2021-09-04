const deepEqual = (first , second) => {
  if(first === null || second === null) return false;
  
  if(typeof first !== 'object' || typeof second !== 'object') return first === second;
  else {
  	const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    const firstValues = Object.values(first);
    const secondValues = Object.values(second);
    
    for(let i = 0; i < firstKeys.length; i++) {
      return deepEqual(firstKeys[i], secondKeys[i]);
    }
    for(let j = 0; j < firstValues.length; j++) {
      return deepEqual(firstValues[j], secondValues[j]);
    }
  }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
