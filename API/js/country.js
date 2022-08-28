let url = "https://restcountries.com/v3.1/all";

let loadApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadCountryDetail(data));
};

let loadCountryDetail = (countries) => {
  console.log(countries);
  let textContainer = document.getElementById("text-container");
  for (let country of countries) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("single-div");
    createDiv.innerHTML = `
    <h4>Name: ${country.name.common}</h4>
    <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
    <p>Region: ${country.region}</p>
    <button onclick="loadCountryCode('${
      country.cca2
    }')" class ="btn btn-primary">Country Image</button>
    `;
    textContainer.appendChild(createDiv);
  }
};

let loadCountryCode = (code) => {
  let url = ` https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadCountryImg(data[0]));
};

let loadCountryImg = (images) => {
  // console.log(images);
  let flagContainer = document.getElementById("flag-container");
  flagContainer.innerHTML = `
  <img src ="${images.flags.png}">
  `;
};

loadApi();
