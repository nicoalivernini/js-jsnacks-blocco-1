// Chiedo numero all'utente
var numeroUtente = parseInt(prompt("Inserisci un numero"));

var numeri = [];

//Ricavo numeri prima
for (var i = 0; i < numeroUtente; i++) {
  // Calcolo il cubo del numero dato dall'utente
  numeri.push(i*i*i);
}

//Stampo
console.log(numeri);
