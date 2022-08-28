let url = "https://randomuser.me/api/?results=100";
let loadApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => convertApi(data.results));
};

let convertApi = (users) => {
  let divContainer = document.getElementById("div-container");
  for (let user of users) {
    let getElement = document.createElement("div");
    getElement.classList.add("single-div");
    getElement.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h3>Name: ${user.id.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Cell: ${user.cell}</p>
        <p>Gender: ${user.gender}</p>
        `;
    divContainer.appendChild(getElement);
  }
};
