//৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।

let division = (number) => {
  return number / 17;
};

let getValue = parseFloat(division(45885).toFixed(2));
console.log(getValue);
