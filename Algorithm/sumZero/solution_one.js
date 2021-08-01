const sumZero = function (arr) {
  let i = 0;
  let j = arr.length - 1;

  let sum = arr[j] + arr[i];
  if (sum === 0) {
    console.log([arr[i], arr[j]]);
    return;
  }

  while (sum !== 0) {
    if (sum > 0) j--;
    else if (sum < 0) i++;

    sum = arr[j] + arr[i];

    if (sum === 0) {
      console.log([arr[i], arr[j]]);
      break;
    }

    if (i >= j) {
      console.log(undefined);
      break;
    }
  }
};

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
