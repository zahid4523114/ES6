console.log("-----with for loop method------");

let arr = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; arr.length > i; i++) {
  sum += arr[i];
}
console.log(sum);

//method-1
console.log("-----with array reduce method-1------");
let arr1 = [1, 9, 17, 23];
//the default value of accumulator is 0.
// a = 0 , c = 1 => a + c = 1;
// a = 1 , c = 9 => a + c = 10;
// a = 10 , c = 27 => a + c = 37;
// a = 37 , c = 23 => a + c = 50;

let checkSum1 = arr1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(checkSum1);

//reduce method-2 advanced
console.log("-----with array reduce method-2------");
let arr2 = [1, 9, 17, 24];

//in this case the default value of accumulator is 1 .
// a = 1 , c = 9 => a + c = 10;
// a = 10 , c = 17 => a + c = 27;
// a = 27 , c = 24 => a + c = 51;

let checkSum = arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(checkSum);
