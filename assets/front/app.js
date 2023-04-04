require('./app.scss');

const words = ['Loreleï MOUTIEZ', 'Développeuse', 'Twitta', 'Artiste du dimanche']; // Définir les mots à afficher
let index = 0; // Index de la position actuelle dans le tableau des mots
let timer; // Variable pour stocker le timer pour le défilement du texte

function scrollText() {
  const textElement = document.getElementById('scrolling-text');
  textElement.innerHTML = words[index];
  index = (index + 1) % words.length;
  timer = setTimeout(scrollText, 2800);
}

scrollText();
