const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const value = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => called(data.meals))
}

const called = meals => {
    const getAll = document.getElementById('input-all');
    getAll.textContent = ''
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
        <img onclick = "details(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
    </div>
        `;
        getAll.appendChild(div);
    })
}

const details = meald => {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meald}`
    fetch(url)
        .then(res => res.json())
        .then(data => restCall(data.meals[0]));
}

const restCall = meal => {
    const divfind = document.getElementById('contain');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    divfind.appendChild(div);
}