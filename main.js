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

// stampo il prezzo per chilometro 
console.log("Prezzo per km:", priceKm);


// ora mi calcolo il prezzo base senza sconti 
let price = km * priceKm


// effettuo un controllo dell'età del passeggerio per capire se va applicato uno sconto

// SE il passeggero è minorenna ha lo sconto del %20
if (age < 18) {
    price = price * 0.8;
}

// SE il passeggero è over 65 ha lo sconto del %40
else if (age >= 65) {
    price = price * 0.6;
}

// ALTRIMETI paga il prezzo pieno del biglietto 
else {
    console.log("Nessuno sconto applicato, prezzo intero");
}

// stampo il prezzo totale 
console.log("Totale da pagare:", price.toFixed(2) + "€");