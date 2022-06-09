// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Creo la variabile sommaNumber
let sommaNumber = 0;

// Applico il loop 10 volte 
for(let i = 1; i <= 10; i++) {
    // Chiedo al utente di inserire un numero
    let userNumber = prompt('Inserisci un numero');

    // Converto la stringa che mi ha dato l'utente in numeri per fare le operazioni
    let singleNumber = parseInt(userNumber);

    // Sommo insieme tutti i numeri dati dal utente
    sommaNumber += singleNumber;

}
// Stampo il console
console.log(sommaNumber);



