//Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
let arr = [
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
];

let combineArr = [...arr[1], ...arr[0]];

let maxNum = Math.max(...combineArr);

console.log(maxNum);
