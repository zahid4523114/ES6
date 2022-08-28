fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => getImage(data));

function getImage(data) {
  let wrapper = document.getElementById("container");
  for (let element of data) {
    let create = document.createElement("div");
    create.innerHTML = `<h1>${element.userId}</h1>`;
    wrapper.appendChild(create);
  }
}
