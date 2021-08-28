const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => buddiesCust(data))
}

const buddiesCust = data => {
    const buddies = data.results;
    console.log(buddies);
    const divFind = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `
Buddy name : ${buddy.name.first} $ {budddy.name.last} Buddy Email Adress ${buddy.email}      
        
        `;
        divFind.appendChild(p);
    }
}