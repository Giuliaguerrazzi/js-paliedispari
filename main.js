// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma

// var parola = prompt('inserisci parola');
// console.log(parola);
//
// var parolaInvertita = reverseWord(parola)
// console.log(parolaInvertita);
//
// function reverseWord (word) {
//
//   var reverse = word.split('').reverse('').join('');
//
//   return reverse;
// }
//
// if (parola == parolaInvertita) {
//   console.log('La parola è palindroma');
// }
// else {
//   console.log('La parola non è palindroma');
// }
// 
/********************************************************************/
//
// L'utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto in base alla scelta pario o dispari fatta all'inizio dall'utente.

var pariDispari = prompt('Scegli pari o dispari');
var num = parseInt( prompt('scegli un numero da 1 a 5') );
console.log(pariDispari);
console.log(num);

compNumber = numRandom(1, 5);
console.log(compNumber);

totale = compNumber + num;
console.log(totale);

finale = result(totale);
console.log(finale);

if (finale == pariDispari) {
  console.log('Hai vinto!');
}
else {
  console.log('Ha vinto il computer');
}



function result(numero) {
  if (numero % 2 == 0) {
     return 'pari';
    }
     return 'dispari';
}

function numRandom (num) {
  var computerNum = Math.floor(Math.random() * 5) + 1;

  return computerNum;
}
