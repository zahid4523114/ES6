//Write an arrow function where it will do the following:a) It will take an array where the array elements will be thename of your friendsb) Check if the length of each element is even, push elementswith even length to a new array and return the result.

let friendsName = ["jahid", "noman", "noyon", "kamrul"];

let check = [];

let getLength = friendsName.find((x) => x.length % 2 === 0);

check.push(getLength);

console.log(check);
