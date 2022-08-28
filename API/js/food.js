let loadMeal = (search) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadMealDiv(data.meals));
};

let loadMealDiv = (meals) => {
  //   console.log(meals);
  let getContainer = document.getElementById("meal-container");
  getContainer.innerHTML = "";
  meals.forEach((meal) => {
    let mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
  <div class="card">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">
    ${meal.strInstructions.slice(0, 200)}
    </p>
  </div>
</div>
    `;
    getContainer.appendChild(mealDiv);
  });
};

let mealName = () => {
  let getMeal = document.getElementById("meal-name");
  loadMeal(getMeal.value);
  getMeal.value = "";
};
