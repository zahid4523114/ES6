let users = [
  {
    name: "symphonyG100",
    brand: "Symphony",
    price: 4500,
    madeIn: "China",
  },
  {
    name: "itelVision",
    brand: "itel",
    price: 5000,
    madeIn: "China",
  },
  {
    name: "infinixHot10s",
    brand: "inifinix",
    price: 12500,
    madeIn: "China",
  },
];

function stringify(users) {
  return JSON.stringify(users);
}
console.log(stringify(users));
