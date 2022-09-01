let loadApi = (categoryName) => {
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((data) => showCatagories(data));
};

let showCatagories = (catagories) => {
  let cardDiv = document.getElementById("card-container");
  cardDiv.innerHTML = "";
  //alert message
  let wrongInput = document.getElementById("alert-text");
  if (catagories.length === 0) {
    wrongInput.classList.remove("d-none");
  } else {
    wrongInput.classList.add("d-none");
  }
  catagories.forEach((category) => {
    let createCard = document.createElement("div");
    createCard.classList.add("col");
    createCard.innerHTML = `
    <div class="card p-2">
          <img src="${category.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">$ ${category.price}</h5>
            <p class="card-text">
            ${category.description.slice(0, 100)}
            </p>
            <button type="button" class=" btn btn-primary">Show details</button>
          </div>
        </div>
    `;
    cardDiv.appendChild(createCard);
  });
  loadSpinner(false);
};

//common function
let searchValue = () => {
  loadSpinner(true);
  let searchBtn = document.getElementById("text-field");
  let sValue = searchBtn.value;
  searchBtn.value = "";
  loadApi(sValue);
};

//search btn
document.getElementById("search-btn").addEventListener("click", function () {
  searchValue();
});

//keypress enter
document
  .getElementById("text-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchValue();
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

let getApi = () => {
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((data) => cat(data));
};

// let cat = (onlyName) => {
//   let hintsDiv = document.getElementById("hints");
//   onlyName.forEach((name) => {
//     let setHints = document.createElement("b");
//     setHints.innerText = name.category;
//     hintsDiv.appendChild(setHints);
//   });
// };
// getApi();
