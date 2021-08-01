const countUniqueValues = function (arr) {
  let res = 1;

  let i = 0;
  let j = 1;

  if (arr.length === 0) return 0;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i = j;
      j++;
      res++;
    } else {
      j++;
    }
  }

  console.log(res);
};

countUniqueValues([]);
countUniqueValues([1, 1, 1, 1]);
countUniqueValues([1, 1, 1, 1, 2, 2, 2, 2]);
countUniqueValues([1, 1, 2, 2, 2, 3, 3, 5, 6]);
countUniqueValues([-9, -9, -4, -4, -2, -1, 0, 1, 1, 4, 4, 6]);
