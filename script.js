// const baseurl= `https://superheroapi.com/api.php/110151828463508/id`

const button = document.getElementById(`newherobutton`)
const getRandomHero = (id) => {
    fetch(`https://superheroapi.com/api.php/110151828463508/${id}`)
        .then(Response => Response.json())
        .then(json => {
            const img = document.getElementById('heroimage');
            img.setAttribute('src', `${json.image.url}`)
            const name = document.getElementById(`heroname`)
            name.innerText = json.name
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
        })
}

button.onclick = () => {
    getRandomHero(
        Math.ceil(Math.random() * 731)
    )
}

searchButton.onclick = () => {
    searchHero(searchBar.value);
}