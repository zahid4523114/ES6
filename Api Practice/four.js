//৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let division = numbers.map((x) => x / 7);
console.log(division);
