//১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।

let selfInfo = {
  data: {
    name: "Dewan Mohammod Zahid Hasan",
    age: 20,
  },
  hobby: ["coding", "eating", "photography"],
  dream: function () {
    return `My name is ${this.data.name}.My hobby is ${this.hobby[0]} .${this.data.name} SCIC is waiting for you.`;
  },
};

let get = selfInfo.dream();
console.log(get);
