// window.location.href = "script.js";
function getUrl() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => getName(data));
}

function getName(data) {
  let element = document.getElementById("wrapper");
  for (const user of data) {
    let createList = document.createElement("li");
    createList.innerText = user.name;
    element.appendChild(createList);
  }
}
