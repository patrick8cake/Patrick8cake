const colours = ["red",
    "blue",
    "orange",
    "white",
    "green",
    "yellow"
];
const colour = document.querySelector('.colour');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
        const randumNumber = getRandom();
        document.body.style.backgroundColor = colours[randumNumber];
        colour.textContent = colours[randumNumber]
    }

)

function getRandom() {
    return Math.floor(Math.random() * colours.length);
}