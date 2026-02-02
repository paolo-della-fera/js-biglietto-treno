// chiedo all'utente il numero di chilometri da percorrere

/*

i numeri vengono letti con il punto quindi sostituisco la virgola con il punto per semplificare l'inserimento dei chilometri da parte dell'utente

*/
const km = parseFloat(prompt("Inserisci i chilometri da percorrere").replace(",", "."));

// chiedo all'utente la sua età
const age = parseInt(prompt("Inserisci l'età del passeggero"));

// stampo l'eta e i chilometri da perccorrere
console.log("Km:", km);
console.log("Età:", age);


// prezzo definito in base hai chilometri €0.21 
const priceKm = 0.21;

//stampo il prezzo per chilometro 
console.log("Prezzo per km:", priceKm);


// ora mi calcolo il prezzo base senza sconti 
let price = km * priceKm
