let peoples = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "tina", age: 22 },
];
//calculation with for loop.
let sum = 0;
for (let i = 0; peoples.length > i; i++) {
  let getAge = peoples[i].age;
  sum += getAge;
}
console.log(sum);

//calculation with reduce method

let peoples2 = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "tina", age: 22 },
];
