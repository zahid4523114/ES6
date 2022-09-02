//https://jsonplaceholder.typicode.com/albums

let loadApi = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/photos");
  let data = await res.json();
  showData(data);
};

let showData = (cards) => {
  let container = document.getElementById("card-container");
  cards = cards.slice(0, 12);
  cards.forEach((card) => {
    let createDiv = document.createElement("div");
    createDiv.classList.add("col");
    createDiv.innerHTML = `
    <div class="card p-3 ">
    <img src="${card.thumbnailUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${card.title.slice(0, 10)}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button onclick ="albumsId(${
        card.id
      })" class ="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Show Information</button>
    </div>
    `;
    container.appendChild(createDiv);
  });
};

let albumsId = async (id) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  let data = await res.json();
  showId(data);
};

let showId = (getId) => {
  console.log(getId);
  let modal = document.getElementById("modal-element-container");
  modal.innerHTML = `
  <img src = "${getId.thumbnailUrl}">
  <h5 class = "mt-3">Tittle: ${getId.title}</h5>
  `;
};

loadApi();
