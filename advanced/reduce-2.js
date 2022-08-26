//Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?

let peoples = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "tina", age: 22 },
];
//Yeah! Do it with for loop.
let sum = 0;
for (let i = 0; peoples.length > i; i++) {
  let getAge = peoples[i].age;
  sum += getAge;
}
console.log(sum);

//Do the same task using array.reduce() method.

let peoples2 = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "tina", age: 22 },
];

let checkAge = peoples2.reduce((pValue, cValue) => {
  return pValue + cValue.age;
}, 0);

console.log(checkAge);
