let users = [
    
    {
        name:"symphonyG100",
        brand:"Symphony",
        price:4500,
        madeIn:"China"
    },
    {
        name:"itelVision",
        brand:"itel",
        price:5000,
        madeIn:"China"
    },
    {
        name:"infinixHot10s",
        brand:"inifinix",
        price:12500,
        madeIn:"China"
    }
    
];

let getPrice = users.find(x => x.price === 5000);

console.log(getPrice);