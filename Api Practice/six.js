//৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const object1 = {
  user: "Zahid",
  nationality: "Bangladesh",
  profession: "Web Developer",
  myBio() {
    console.log(
      `My name is ${this.user}. I'm a ${this.profession} from ${this.nationality}`
    );
  },
};
//array
let { user } = object1;

console.log(user);

const arr = ["Zahid", "Bangladesh", "Web Developer"];

let [one, two, three] = arr;

let country = two;

console.log(country);
