// l programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var km = parseInt(prompt("inserisci i km da percorrere"));
var eta =  parseInt(prompt("inserisci la tua età"));
const prezzoKm = 0.21;
console.log(km);
console.log(eta);
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

if(!isNaN(km) && !isNaN(eta)){



    var prezzo = km * prezzoKm;
    console.log( prezzo);
    document.getElementById("prezzo1").innerHTML += " " + prezzo.toFixed(2) + "€";

    // va applicato uno sconto del 20% per i minorenni
    if ( eta < 18 ){
        prezzo -= (prezzo * 20) / 100 ;
        document.getElementById("sconto").innerHTML += " Lo sconto sarebbe del 20%  Ma tua madre ci ha chiamato e TI PROIBISCE DI PARTIRE ";

    } else if (eta >= 65){
        prezzo -= (prezzo * 40) / 100;
        document.getElementById("sconto").innerHTML = " Hai più di 65 anni lo sconto è del  40% ma noi ti consigliamo di stare a casa!!!";

    }
    
    console.log (prezzo.toFixed(2));
    document.getElementById("totale").innerHTML = " " + prezzo.toFixed(2) + "€";
    // va applicato uno sconto del 40% per gli over 65.
    // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali 

} else {
 alert( "Dati non validi!!!!");
}     