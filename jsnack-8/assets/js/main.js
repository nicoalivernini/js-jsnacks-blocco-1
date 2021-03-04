//Chiedo numero a 4 cifre utente
var numero = prompt("Inserisci un numero di 4 cifre:");

var somma = 0;

//Divido il numero in singole cifre
Array.from(numero);

//Sommo le singole cifre
for (var i = 0; i < numero.length; i++) {
  somma = somma + parseInt(numero[i]);
}

//Stampo
console.log(somma);
