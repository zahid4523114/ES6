//3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

function value(value1, value2 = 5) {
  return value1 + value2;
}
console.log(value(10));
