//Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

let numbers = [5, 10, 15, 20, 25, 30];

let average = numbers.map((num) => {
  return Math.pow(num, 2);
});

let sum = average.reduce((pValue, cValue) => {
  return pValue + cValue;
}, 0);

let getAverage = parseFloat((sum / numbers.length).toFixed(2));

console.log(getAverage);
