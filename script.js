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
            document.getElementById(`errMessage`).classList.remove(`displayBlock`)
        })
        .catch(()=>{
           setTimeout(()=>{document.getElementById(`errMessage`).classList.add(`displayBlock`)}, 1000*4)
        })
}

const shearchButton = document.getElementById('searchButton')
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
            document.getElementById(`errMessage`).classList.remove(`displayBlock`)
        })
        .catch(()=>{
            setTimeout(()=>{document.getElementById(`errMessage`).classList.add(`displayBlock`)}, 1000*4)
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
const toggleMode = () => {
    const cardbody = document.querySelector(`.cardbody`)
    const heroname = document.getElementById(`heroname`)
    const buttons = Array.from(document.querySelectorAll(`button`))
    const changemode = document.querySelector(`.changemod`)

    document.body.classList.toggle(`darkModebody`)
    searchBar.classList.toggle(`darkModesearchbar`)
    cardbody.classList.toggle(`darkModecardbody`)
    heroname.classList.toggle(`darkModeheroname`)
    buttons.forEach(button => {
        button.classList.toggle(`darkModeButton`)
    })
    changemode.innerHTML == `Darkmode` ? changemode.innerHTML = `Lightmode` : changemode.innerHTML = `Darkmode`
}

button.onclick = () => {
    getRandomHero(
        Math.ceil(Math.random() * 731)
    )
}

searchButton.onclick = () => {
    searchHero(searchBar.value);
}