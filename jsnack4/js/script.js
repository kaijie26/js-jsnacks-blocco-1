// - Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
// Creo l'array vuoto
const userOddNumbers = [];

// Creo il loop 6 volte
for(let i = 1; i <= 6; i++) {
    // Chiedo al utente di inserire un numero
    let userNumber = prompt('Inserisci un numero');

    // Converto la stringa che mi ha dato l'untente in un numero
    let singleNumber = parseInt(userNumber);

    // Applico la condizione che se il numero inserito dal utente
    // È dispari allora lo inserisco nell' array altrimneti
    // Non inserisco il numero e lascio l'array vuoto come in partenza
    if(singleNumber % 2 !== 0){
        userOddNumbers.push(singleNumber);
    }else{
        userOddNumbers.push();
    }
    
}
// Stampo in console
console.log(userOddNumbers);