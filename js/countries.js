const countryLoad = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => customize(data))
}

countryLoad()

const customize = countries => {
    for (const country of countries) {
        const findIt = document.getElementById('countries');
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3> ${country.name}</h3>
        <p> ${country.capital} </p>
        <button onclick = "loadCountryname('${country.name}')"> Find Details </button>
        `
        findIt.appendChild(div)
    }
}

const loadCountryname = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]));
}

const displayCountry = country => {
    const find = document.getElementById('country-details');
    find.innerHTML = `
    <h5> Name: ${country.name}</h5>
    <p> Population: ${country.population}</h5>
    <br>
    <br>
    <br>
    <img width = "200px" src = "${country.flag}">
    `;
}