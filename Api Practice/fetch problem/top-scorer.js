let loadApi = (country) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=bfe53106593a4634aeed9de84d3abd9a`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => showNews(data.articles));
};

let showNews = (newses) => {
  // console.log(newses);
  let newsContainer = document.getElementById("card-info");
  newsContainer.innerHTML = "";
  let textError = document.getElementById("error-text");
  if (newses.length === 0) {
    textError.classList.remove("d-none");
  } else {
    textError.classList.add("d-none");
  }
  newses.forEach((news) => {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card");
    cardBody.classList.add("shadow-lg");
    cardBody.classList.add("text-bg-dark");
    cardBody.classList.add("my-5");
    cardBody.innerHTML = `
    <img src="${news.urlToImage}" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h5 class="card-title">${news.title}</h5>
      <p class="card-text">${news.content}</p>
      <p class="card-text">
      ${news.description}
      </p>
      <p class="card-text">Last updated ${news.publishedAt}</p>
    </div>
    `;
    newsContainer.appendChild(cardBody);
  });
};

//
let searchInputValue = () => {
  let searchInput = document.getElementById("search-country");
  loadApi(searchInput.value);
};
//search news
document
  .getElementById("search-country-btn")
  .addEventListener("click", function () {
    searchInputValue();
  });
//search news by key pres
let keyPress = document
  .getElementById("search-country")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchInputValue();
    }
  });
