const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => refRess(data))
}


const refRess = data => {
    const boxFind = document.getElementById('quote');
    boxFind.innerText = data.quote;
}