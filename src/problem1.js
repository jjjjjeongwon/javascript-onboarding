function problem1(pobi, crong) {
  if (checkValue(pobi) && checkValue(crong)) {
    let maximumPobi = Math.max(
      ...[
        sumValue(pobi, 0),
        sumValue(pobi, 1),
        multValue(pobi, 0),
        multValue(pobi, 1),
      ]
    );
    let maximumCrong = Math.max(
      ...[
        sumValue(crong, 0),
        sumValue(crong, 1),
        multValue(crong, 0),
        multValue(crong, 1),
      ]
    );

    if (maximumPobi > maximumCrong) {
      return 1;
    } else if (maximumPobi < maximumCrong) {
      return 2;
    } else {
      return 0;
    }
  }
  return -1;
}

function checkValue(arr) {
  return arr[0] > 400 || arr[1] > 400 || arr[0] < 1 || arr[1] < 1
    ? false
    : arr[0] % 2 === 1 && arr[1] % 2 === 0 && arr[1] - arr[0] === 1
    ? true
    : false;
}

function sumValue(arr, idx) {
  let sum = 0;
  arr[idx] = arr[idx].toString();
  for (let i = 0; i < arr[idx].length; i++) {
    sum += parseInt(arr[idx][i]);
  }
  return sum;
}

function multValue(arr, idx) {
  let mult = 1;
  do {
    mult *= arr[idx] % 10;
    arr[idx] = Math.floor(arr[idx] / 10);
  } while (arr[idx] > 0);
  return mult;
}

module.exports = problem1;
