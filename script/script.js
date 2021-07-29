// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var km = parseInt(prompt("inserisci i km da percorrere"));
var eta =  parseInt(prompt("inserisci la tua età"));
const prezzoKm = 0.21;
console.log(km);
console.log(eta);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
var prezzo = km * prezzoKm;
console.log( prezzo);
// va applicato uno sconto del 20% per i minorenni
if ( eta < 18 ){
   prezzo -= (prezzo * 20) / 100 
} else if (eta >= 65){
    prezzo -= (prezzo * 40) / 100 
}
console.log (prezzo.toFixed(2));
document.getElementById("totale").innerHTML = " " + prezzo.toFixed(2) + "€"
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.