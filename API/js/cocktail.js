let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
let loadApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showApi(data.drinks));
};

let showApi = (drinks) => {
  let cardContainer = document.getElementById("card-container");
  drinks.forEach((drink) => {
    let card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
  <div style ="width:20rem;" class="card">
  <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">
    ${drink.strInstructions.slice(0, 50)}
    </p>
    <button onclick = "loadDetail(${
      drink.idDrink
    })" class="btn btn-primary">Show More Details</button>
  </div>
</div>
  `;
    cardContainer.appendChild(card);
  });
};

let loadDetail = (id) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i= ${id} `)
    .then((res) => res.json())
    .then((data) => showDetail(data.drinks[0].strInstructions));
};

let showDetail = (details) => {
  let putDetail = document.getElementById("detail-container");
  putDetail.innerText = "";
  let detailDiv = document.createElement("div");
  detailDiv.innerHTML = `
  <p>${details}</p>
  `;
  putDetail.appendChild(detailDiv);
};

loadApi();
