function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce(function(currentSum, currentNumber) {
    return currentSum + currentNumber;
  }, 0);
  avg = Number((sum / arr.length).toFixed(2)); 

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    sum = arr.reduce(function(currentSum, currentNumber) {
      return currentSum + currentNumber;
    }, 0);
    return sum;
  }  
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let difference = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    difference = max - min;
    return difference;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      } 
    } 
    return sumEvenElement / countEvenElement;
  }  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const max = func(...arrOfArr[i]);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}
