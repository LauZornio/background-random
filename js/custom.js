//Array con colore esadecimale e nome rispettivo
const ColorsArr = [
  { color: "#FF5733", name: "Persimmon" },
  { color: "#33FF57", name: "Spring Green" },
  { color: "#3357FF", name: "Royal Blue" },
  { color: "#FF33A6", name: "Razzmatazz" },
  { color: "#A633FF", name: "Electric Purple" },
  { color: "#33FFF3", name: "Turquoise" },
  { color: "#FF9933", name: "Atomic Tangerine" },
  { color: "#3399FF", name: "Brilliant Azure" },
  { color: "#FF3380", name: "Wild Strawberry" },
  { color: "#80FF33", name: "Spring Frost" }
];

//---------FUNZIONE PER INDICE CASUALE----------
//genera un numero casuale compreso tra 0 e la lunghezza dell'array darkColorsArr.
//La funzione Math.random() genera un numero decimale casuale tra 0 (incluso) e 1 (escluso), che viene poi moltiplicato per la lunghezza dell'array.
//Math.floor arrotonda il risultato al numero intero inferiore più vicino.
function getRandomIndex() {
  const randomIndex = Math.floor(ColorsArr.length * Math.random());
  return randomIndex;
}

//-------------------


//---------SELEZIONE DEGLI ELEMENTI DEL DOM----------
const body = document.querySelector("body"); // seleziona l'elemento body
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code"); //seleziona l'elemento con ID specificato

//-------------------


//---------FUNZIONE PER CAMBIARE IL BACKGROUND-COLOR DELLO SFONDO----------
//Costante color che prende dall'array con un'indice casuale dato dalla funzione getRandomIndex()
//con innerText, cambia il contenuto del testo con color.color (numero # perché chiama l'array con indice casuale e l'elemento chiamato color) e color.name, ovvero il nome del colore.
//body è la nostra costante del body del DOM.
  //.style è la proprietà della costante body che contiente tutte le proprietà CSS.
  //.background-color è una proprietà CSS specifica.

function changeBackgroundColor() {
  const color = ColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color.color + " " + color.name;
  body.style.backgroundColor = color.color;
}

//-------------------


//---------EVENT LISTENER AL BTN----------
//Queste righe selezionano l'elemento con l'id btn e aggiungono un gestore di eventi onclick. 
//Quando il bottone viene cliccato, viene chiamata la funzione changeBackgroundColor.
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;

//Un event listener è un blocco di codice che "ascolta" un evento specifico su un elemento HTML e risponde quando quell'evento si verifica. Gli eventi comuni includono clic del mouse, movimenti del mouse, pressione dei tasti e altro.