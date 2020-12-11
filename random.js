const quotesData = [
  {
    "text": "Les hommes ont créé des cimetières afin de se fixer dans le temps et, malgré la décomposition dans l'espace.",
    "author": "Emile Marcel / L'Ombre et le silence"
  },
  {
    "text": "L'horreur ne va pas sans l'imagination.",
    "author": "Arthur Conan Doyle / Sherlock Holmes"
  },
  {
    "text": "Qui n'a pas goûté à la mort ignore la saveur de la nourriture.",
    "author": "Proverbe gaélique ; Les proverbes et locutions gaéliques"
  },
  {
    "text": "Celui qui est le plus près de la mort est celui qui la redoute davantage.",
    "author": "Proverbe oriental ; Les apologues et contes orientaux"
  },
  {
    "text": "La mort ne faisait pas de discrimination. La grande faucheuse emportait les saints et les pécheurs d'un même revers de faux.",
    "author": "La reine des morts - Tess Gerritsen"
  },
  {
    "text": "On est les héros d'une bataille déjà perdu , se nourrissent des souvenirs d'une mémoire disparu .",
    "author": "DEATH"
  },
  {
    "text": "L’éclaircie vient après la pluie.",
    "author": "The crow, Brandon Lee."
  },
  {
    "text": "Il y a un certain confort dans le vide de l'océan, pas de passé, pas d'avenir.",
    "author": "Le dernier samouraï"
  },
  {
    "text": " Avec la paix dans l'âme la mort n'est qu'un bonheur.",
    "author": "Proverbe mongol"
  },
  {
    "text": "La distance qui relie la terre au ciel est celle de la pensée.",
    "author": "Proverbe mongol"
  },
  {
    "text": "choisis la vie.",
    "author": "trainspotting"
  },
  {
    "text": "Yippee-ki-yay, pauvre con !",
    "author": "Piège De Cristal - John McClane "
  }
];

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let currentQuote = '';
let currentAuthor = '';
const btn = document.querySelector('.button');
const quote = document.querySelector('#text');
const author = document.querySelector('.quote-author');

function getRandomColor() {
  const randomColor = colors[
    Math.floor(Math.random() * colors.length)
  ];


  // Your code below
  document.body.style.color = randomColor;
  document.body.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  quote.style.color = randomColor

  // Your code below
quote.textContent = currentQuote;
author.textContent = currentAuthor;
  // Your code above
}

  function getRandomQuote() {
  const randomQuote = quotesData[
    Math.floor(Math.random() * quotesData.length)
  ];

       currentQuote = randomQuote.text;
       currentAuthor = randomQuote.author;


  // Your code above

getRandomColor();
}

getRandomQuote();

// Your code below
btn.addEventListener
('click',getRandomColor);

btn.addEventListener
('click',getRandomQuote);
// Your code above
