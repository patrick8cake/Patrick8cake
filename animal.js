// local reviews data
const animals = [{
        id: 1,
        animal: "tiger",
        size: "it is big",
        colour: 'it is orange and yellow',
        img: "https://cdn.pixabay.com/photo/2018/05/23/18/54/tiger-3424791_960_720.jpg",
        text: "It likes to roar and run. It lives in the jungle.",
    },
    {
        id: 2,
        animal: "panda",
        size: 'It is big',
        colour: 'It is black and white',
        img: "https://cdn.pixabay.com/photo/2018/12/05/13/41/panda-3857754_960_720.jpg",
        text: 'It is very silly. It lives in forests and likes to eat bamboo.',
    },
    {
        id: 3,
        animal: "Fox",
        size: 'it is small',
        colour: 'it is orange',
        img: "https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_960_720.jpg",
        text: 'It is very sneaky. It lives in forests and likes to eat small rodents.',
    },
    {
        id: 4,
        animal: 'Crocodile',
        size: 'it is big',
        colour: 'It is green',
        img: "https://cdn.pixabay.com/photo/2013/10/13/06/08/animal-194914_960_720.jpg",
        text: 'It is very moody. It lives in rivers and the sea. It eats meat.'
    },
    {
        id: 5,
        animal: "girafe",
        size: 'It is tall',
        colour: 'It is yellow',
        img: "https://cdn.pixabay.com/photo/2021/05/21/12/35/giraffe-6271050_960_720.jpg",
        text: 'It eats leaves and lives in Africa.',
    }
];

const animal = document.getElementById('animal');
const size = document.getElementById('size');
const colour = document.getElementById('colour');
const text = document.getElementById('text');
const animalImg = document.getElementById('animal-img');

const arrowLeft = document.querySelector(".fa-angle-left");
const arrowRight = document.querySelector(".fa-angle-right");
const randomBtn = document.querySelector('.random-btn');

let currentIndex = 0;

//functions 

window.addEventListener('click', function() {
    getAnimal(currentIndex);
})

function getAnimal(animal) {
    let item = animals[currentIndex];
    animal1.textContent = item.animal;
    size.textContent = item.size;
    colour.textContent = item.colour;
    text.textContent = item.text;
    animalImg.src = item.img;
};

// btns 

arrowRight.addEventListener('click', function() {
    currentIndex++
    if (currentIndex > animals.length - 1) {
        currentIndex = 0;
    }
    getAnimal(currentIndex);
})

arrowLeft.addEventListener('click', function() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = animals.length - 1
    }
    getAnimal(currentIndex)
})

randomBtn.addEventListener('click', function() {
    currentIndex = getRandomNumber();
    getAnimal(currentIndex);
})


function getRandomNumber() {
    return Math.floor(Math.random() * animals.length)
}