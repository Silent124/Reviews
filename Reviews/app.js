//review locales
const reviews = [
    {
        id: 1,
        name: "El señor llaves",
        job: "Cuida las llaves",
        img:
            "https://i.pinimg.com/originals/70/af/0c/70af0c130a10f5b1d8c03f1820941aa1.jpg",
        text: "El Señor Llaves es un personaje ficticio conocido por su capacidad para abrir cualquier puerta. Dotado de un ingenio sobresaliente y un vasto conocimiento sobre cerraduras y mecanismos, el Señor Llaves no solo es un maestro cerrajero, sino también un enigma en sí mismo. "
    },
    {
        id: 2,
        name: "Spider-man",
        job: "Cuida la ciudad",
        img:
            "https://i.pinimg.com/564x/8c/70/7f/8c707fe60cf154d399ee8e504bb530f3.jpg",
        text: "Spider-Man, conocido también como el Hombre Araña, es un superhéroe icónico del universo de Marvel Comics. Creado por Stan Lee y Steve Ditko, hizo su primera aparición en Amazing Fantasy #15 en 1962. "
    },
    {
        id: 3,
        name: "Pin Gagrueza",
        job: "Estudiante",
        img:
            "https://i.pinimg.com/564x/88/2f/95/882f958c1ea392a17b94e78c1a0593fe.jpg",
        text: "Un estudiante es una persona dedicada al aprendizaje y al desarrollo de sus conocimientos y habilidades en diversas áreas del saber. "
    },
    {
        id: 4,
        name: "Shrek",
        job: "No sé",
        img:
            "https://i.pinimg.com/564x/a2/60/d7/a260d7537bf5b824ed858894148be0c1.jpg",
        text: "Shrek es un personaje ficticio y el protagonista de una popular serie de películas de animación producidas por DreamWorks. "
    },
];

//selecionar los items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-Btn');
const nextBtn = document.querySelector('.next-Btn');
const randomBtn = document.querySelector('.random-button');

//establecer el inicio del items
let currentItem = 0;

//load inital item
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

//show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

//show prev person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//random person

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});

