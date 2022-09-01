let loadApi = (inputValue, dataLimit) => {
  let url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPhones(data.data, dataLimit));
};

let showPhones = (phones, dataLimit) => {
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  //slicing phone
  let showAll = document.getElementById("show-all-btn");
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
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
            <button onclick = "showDetailsBtn('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Show details
            </button>
          </div>
        </div>
    `;
    cardContainer.appendChild(phoneDiv);
  }
  //stop loader
  loadSpinner(false);
};

//common function
let searchInputValue = (dataLimit) => {
  //show spinner
  loadSpinner(true);
  let setValue = document.getElementById("text-field");
  let getValue = setValue.value;
  loadApi(getValue, dataLimit);
};
//search button
document.getElementById("search-btn").addEventListener("click", function () {
  searchInputValue(10);
});

//search by enter keypress
let keyPress = document
  .getElementById("text-field")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchInputValue(10);
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
//show all btn
document.getElementById("show-all-btn").addEventListener("click", function () {
  searchInputValue();
});
//show modal detail
let showDetailsBtn = async (id) => {
  let url = `https://openapi.programming-hero.com/api/phone/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  modalContainer(data.data);
};

let modalContainer = (pushContent) => {
  // console.log(pushContent);
  let container = document.getElementById("modal-container");
  container.innerHTML = "";
  let modalInfoDiv = document.createElement("div");
  modalInfoDiv.innerHTML = `
  <img src="${pushContent.image}" class="card-img-top" alt="..." />
    <h5 class="card-title">${pushContent.brand}</h5>
    <p class="card-text">
    ${pushContent.name}
    </p>
    <p class="card-text">
    ${pushContent.releaseDate}
    </p>
  `;
  container.appendChild(modalInfoDiv);
};
