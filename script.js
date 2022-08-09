// const baseurl= `https://superheroapi.com/api.php/110151828463508/id`

const button = document.getElementById(`newherobutton`)
const getRandomHero = (id) =>{
fetch(`https://superheroapi.com/api.php/110151828463508/${id}`)
.then(Response => Response.json())
.then(json =>{ 
const img = document.getElementById('heroimage');
img.setAttribute('src', `${json.image.url}`)
const name = document.getElementById(`heroname`)
name.innerText = json.name
})
}

button.onclick = () =>{getRandomHero(
    Math.ceil(Math.random()* 731)
)
}