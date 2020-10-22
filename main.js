// Chiedere all'utente di inserire una parola
// Creare una funzione per invertire i caratteri di una stringa.
// Capire se la parola inserita è palindroma

var parola = prompt('inserisci parola');
console.log(parola);

var parolaInvertita = reverseWord(parola)
console.log(parolaInvertita);

function reverseWord (word) {

  var reverse = word.split('').reverse('').join('');

  return reverse;
}

if (parola == parolaInvertita) {
  console.log('La parola è palindroma');
}
else {
  console.log('La parola non è palindroma');
}
