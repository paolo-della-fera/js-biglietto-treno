// chiedo all'utente il numero di chilometri da percorrere

/*

i numeri vengono letti con il punto quindi sostituisco la virgola con il punto per semplificare l'inserimento dei chilometri da parte dell'utente

*/
const km = parseFloat(prompt("Inserisci i chilometri da percorrere").replace(",", "."));

// chiedo all'utente la sua età
const age = parseInt(prompt("Inserisci l'età del passeggero"));

// stampo l'eta e i chilometri da perccorrere
console.log(km, age);


// prezzo definito in base hai chilometri €0.21 
const priceKm = 0.21;

//stampo il prezzo per chilometro 
console.log(priceKm);

// calcolo il prezzo in base al costo per chilometro senza lo sconto
const price = km * priceKm;


