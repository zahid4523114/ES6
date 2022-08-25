console.log("-----with for loop method------");
let odd = [1, 3, 5, 7, 9];
let getEvent = [];
for (let i = 0; odd.length > i; i++) {
  let checkEven = odd[i] + 1;
  getEvent.push(checkEven);
}
console.log(getEvent);

//with array map method
console.log("-----with array map method------");
let odd2 = [1, 3, 5, 7, 9];

let checkEven = odd2.map((x) => x + 1);

console.log(checkEven);
