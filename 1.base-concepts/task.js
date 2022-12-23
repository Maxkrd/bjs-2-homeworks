"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a);
  } else if (d === 0) {
      arr[0] = -b/(2*a);
  } else {
  
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P;
  let loanBody;
  let monthlyFee;
  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  } else if (isNaN(countMonths)) {
    return false;
  } else {
    P = percent / 100 / 12;
    loanBody = amount - contribution;
    monthlyFee = loanBody * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
    return Number((monthlyFee * countMonths).toFixed(2));
  }
}