# 🌈 Cambia Colore di Background Randomico

Questo progetto di base in JavaScript, PURAMENTE DIDATTICO, permette di **cambiare il colore di background** di una pagina web al click di un pulsante. I colori vengono selezionati in modo casuale da un array di colori predefiniti.
🌈In questo esercizio, si sviluppa maggiormente la capacità di **Debugging**, skill fondamentale per un Developer!

🌈Questo è il quarto esercizio del corso di **freecodecamp.org** (https://www.freecodecamp.org/), nello specifico https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/
🌈Lezione: Learn Basic Debugging by Building a Random Background Color Changer

## 🚀 Funzionalità

- **Cambia Colore**: Cambia il colore di background della pagina ogni volta che si clicca sul pulsante.
- **Debugging**: l'esercizio verte nel correggere gli errori di programmazione JS.

## 📋 Requisiti

- Un browser moderno che supporta JavaScript.

## 🖱️ Utilizzo

1. Apri la pagina `index.html` in un browser.
2. Clicca sul pulsante "Change Background Color" per cambiare il colore di background in modo casuale.

## 💻 Apprendimento

La cosa fondamentale di questo esercizio è la correzione del codice (il Debugging) e la creazione di un background-color random. Nello specifico, ho potuto approfondire:

1. **Generazione di un numero casuale**: utilizzando l'oggetto **Math** e richiamando metodi come **.random()** e **.floor()**
     function getRandomIndex() {
        const randomIndex = Math.floor(ColorsArr.length * Math.random());
        return randomIndex;
     }

    **Math.random()**: numero compreso tra 0 (incluso) e 1 (escluso). 
    **Math.floor()**: arrotonda un numero per difetto all'intero più vicino.

2. **Modificare il testo di un elemento HTML**: utlizzo della proprità **.innerText**, che consente di modificare il contenuto testuale di un elemento.
     Differenza tra
     **.innerText**: gestisce solo il testo, non considera i tag HTML. Es: paragrafo.innerText = "Testo cambiato!";
     **.innerHTML**: può gestire e includere tag HTML. Es: paragrafo.innerHTML = "Ciao, <strong>mondo!</strong>";

3. **Funzione al click di un pulsante**: utilizzando una proprietà dell'elemento, **.onclick**, viene richiamata la funzione.
     const btn = document.querySelector("#btn");
     btn.onclick = changeBackgroundColor;

## 📜 Licenza
Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.
