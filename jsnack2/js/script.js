// Chiedi un numero di 4 cifre all’utente nel prompt
// e calcola la somma di tutte le cifre che compongono il numero. 

// Chiedo un numero di 4 cifre al utente
const userNumbers = prompt('Dimmi un numero di 4 cifre');

let sommaNumber = 0;

// Sommo i il totale dei 4 numeri che mi ha dato l'utente
for(let i = 0; i < userNumbers.length; i++) {
    
    let singleNumber = parseInt(userNumbers[i]);

    sommaNumber += singleNumber;
   
   
}

console.log(sommaNumber);