

const gethero = () =>{
const baseurl= `https://superheroapi.com/api.php/10223569763528853/id`
fetch(`https://superheroapi.com/api.php/10223569763528853/${Math.ceil(Math.random()* 731)}`)
.then(Response => Response.json())
.then(json =>{ 
const img = document.getElementById('heroimage');
img.setAttribute('src', `${json.image.url}`)
const name = document.getElementById(`heroname`)
name.innerText = json.name
})
}

gethero()