//১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
const userName = "Dewan Mohammod Zahid Hasan";

let age = 22;

console.log(`My name is ${userName} and i am ${age} years old.`);

//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।

let userInfo = {
  name: "Dewan Mohammod Zahid Hasan",
  age: 22,
  profession: "Student",
  job: "Teacher",
  livesIn: "Ghatail,Tangail",
  dream: "Web Developer",
};

let getInfo = `My name is ${userInfo.name}. I am ${userInfo.age}  years old.I works as a ${userInfo.job}.My dream is become a professional ${userInfo.dream}.`;

console.log(getInfo);
