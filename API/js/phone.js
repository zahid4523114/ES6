let loadApi = (inputValue) => {
  let url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhones(data.data));
};

let showPhones = (phones) => {
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  //slicing phone
  phones = phones.slice(0, 10);
  //show validation message
  let warningText = document.getElementById("alert-text");
  if (phones.length === 0) {
    warningText.classList.remove("d-none");
  } else {
    warningText.classList.add("d-none");
  }
  for (let phone of phones) {
    let phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card p-2">
          <img src="${phone.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button type="button" class=" btn btn-primary">Show details</button>
          </div>
        </div>
    `;
    cardContainer.appendChild(phoneDiv);
  }
  //stop loader
  loadSpinner(false);
};

//common function
let searchInputValue = () => {
  //show spinner
  loadSpinner(true);
  let setValue = document.getElementById("text-field");
  let getValue = setValue.value;
  loadApi(getValue);
};
//search button
document.getElementById("search-btn").addEventListener("click", function () {
  searchInputValue();
});

//search by enter keypress
let keyPress = document
  .getElementById("text-field")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchInputValue();
    }
  });

//spinner
let loadSpinner = (spinner) => {
  let loading = document.getElementById("spinner");
  if (spinner) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
