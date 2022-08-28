let url = "https://api.kanye.rest/";
let loadApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showApi(data.quote));
};

let showApi = (data) => {
  let textContainer = document.getElementById("text-container");
  let element = document.createElement("p");
  element.innerText = data;
  textContainer.appendChild(element);
};
// loadApi();
