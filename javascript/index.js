document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hey is this working?')
});

let divCollect = document.querySelector('#plant-collection')
let addPlant = true;
const addBtn = document.querySelector('#add-plant-button')
const plantForm = document.querySelector('#plant-collection')


function getPlants() {
    return fetch('http://localhost:3000/plants')
    .then(res => res.json())
}

const form = () => document.querySelector('form');

const handleSubmit = e => {
    e.preventDefault();
    console.log('name', e.target[1].value)
    console.log('image', e.target[2].value)
    console.log('Sunlight', e.target[3].value)
    console.log('paragraph', e.target[4].value)
    console.log('color', e.target[5].value)
    fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            Accept: "application/json"
        },
        body: JSON.stringify({
            "name": e.target[0].value,
            "image": e.target[1].value,
            "Sunlight": e.target[2].value,
            "paragraph" : e.target[3].value,
            "color": e.target[4].value,
            "likes": 0
        })
    })
    .then(res => res.json())
    .then((obj_plant) => {
        let new_plant = renderPlants(obj_plant)
        divCollect.append(new_plant)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    form().addEventListener("submit", handleSubmit);
})

function likes(e) {
    e.preventDefault()
    let more = parseInt(e.target.previousElementSibling.innerText) + 1

    fetch(`http://localhost:3000/plants/${e.target.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "likes": more
        })
    })
    .then(res => res.json())
    .then((like_obj => {
        e.target.previousElementSibling.innerText = `${more} likes`;
    }))
}

function renderPlants(plant) {
    let h2 = document.createElement('h2')
    h2.innerText = plant.name

    let img = document.createElement('img')
    img.setAttribute('src', plant.image)
    img.setAttribute('class', 'plant-avatar')

    let h3 = document.createElement('h3')
    h3.innerText = plant.Sunlight

    let p = document.createElement ('p')
    p.innerText = plant.paragraph

    let h4 = document.createElement ('h4')
    h4.innerText = plant.color

    let element = document.createElement('p')
    element.innerText = `${plant.likes} likes`

    let btn = document.createElement('button')
    btn.setAttribute('class', 'like-btn')
    btn.setAttribute('id', plant.id)
    btn.innerText = "Like"
    btn.addEventListener('click', (e) => {
        console.log(e.target.dataset);
        likes(e)
    })

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2,img,h3,p, h4, element, btn)
    divCollect.append(divCard)
}

getPlants().then(plants => { console.log(plants)
    plants.forEach(plant => {
        renderPlants(plant)
    })
})

