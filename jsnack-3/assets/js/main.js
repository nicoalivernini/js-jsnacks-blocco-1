//Creo variabile
var somma = 0;

// Creo il ciclo for per chiederlo più volte
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Inserisci un numero"));
  // Calcolo la somma
  somma = somma + numero;

}
 //Stampo
document.getElementById('numeri').innerHTML = somma
