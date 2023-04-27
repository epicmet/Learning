const reverseArray = (arr) => {
  const resultArr = [];
  for(let i = arr.length - 1; i >= 0; i--){
    resultArr.push(arr[i]);
  }
  return resultArr;
}

const reverseArrayInPlace = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  
  while(i < j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
    i++;
    j--;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
