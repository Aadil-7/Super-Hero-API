// BASEURL= `https://superheroapi.com/api.php/110151828463508/id`

const statsDiv = document.getElementById(`stats`)
const button = document.getElementById(`newherobutton`)
const getRandomHero = (id) => {
    fetch(`https://superheroapi.com/api.php/110151828463508/${id}`)
        .then(Response => Response.json())
        .then(json => {
            const img = document.getElementById('heroimage');
            img.setAttribute('src', `${json.image.url}`)
            const name = document.getElementById(`heroname`)
            name.innerText = json.name
            statsDiv.innerHTML = getStats(json);
        })
}

const searchButton = document.getElementById('searchButton')
const searchBar = document.getElementById('searchbar')
const searchHero = (search) => {
    fetch(`https://superheroapi.com/api.php/110151828463508/search/${search}`)
        .then(Response => Response.json())
        .then(json => {
            const hero = json.results[0]
            const img = document.getElementById('heroimage');
            img.setAttribute('src', `${hero.image.url}`)
            const name = document.getElementById(`heroname`)
            name.innerText = hero.name
            statsDiv.innerHTML = getStats(hero);
        })
}

const getStats = (char) => {
    const statNames = Object.keys(char.powerstats)
        .map(stat =>
            `<p>${char.powerstats[stat]}<br><span>${stat.toUpperCase()}</span></p>`
        )
        .join('')
    return statNames
}

button.onclick = () => {
    getRandomHero(
        Math.ceil(Math.random() * 731)
    )
}

searchButton.onclick = () => {
    searchHero(searchBar.value);
}