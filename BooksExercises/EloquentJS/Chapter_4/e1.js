const range_V1 = (start, end, step = 1) => {
  let res = [];
  
  if(step > 0) { 
  	for(let i = Number(start); i <= Number(end); i += step){
   	  res.push(i);
  	}
  } else {
    for(let i = Number(start); i >= Number(end); i += step){
      res.push(i);
  	}
  }
  return res;
}

const range = (start, end, step = start < end ? 1 : -1) => {
  let tempNum = start;
  let res = [];
  while(tempNum !== end){
    res.push(tempNum);
    tempNum += step;
  }
  
  res.push(end);
  return res;
}

const sum = (arr) => {
  let total = 0;
  for(let num of arr) {
    total += num;
  }
  return total;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
