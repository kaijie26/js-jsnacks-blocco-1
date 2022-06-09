// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// Array di numeri
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Scorro i numeri  
for(let i = 0; i < numbers.length; i++) {

     const allNumbers = numbers[i];

     if(allNumbers % 2 === 0 ) {
         document.getElementById('green').innerHTML += allNumbers + ' ';
    
     }else{
        document.getElementById('red').innerHTML +=allNumbers + ' ';
    }
   
   
}  





