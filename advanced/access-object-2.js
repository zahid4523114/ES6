let data = {
  location: [
    {
      latitude: "34.5,37.8",
      longitude: "98.77 , 57.7",
      city: "Tangail",
      country: "Bangladesh",
    },
  ],
};
let getCity = data.location[0].city;
console.log(getCity);
