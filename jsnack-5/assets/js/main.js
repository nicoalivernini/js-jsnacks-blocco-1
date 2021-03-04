//Creo array vuoto
var arrayVuoto = [];

// Definisco variabile numero
var numero;

// Chiedo per 6 volte un numero all'utente
for (var i = 0; i < 6; i++) {
  numero = parseInt(prompt("Inserisci un numero"));
  console.log(numero);
  //Controllo numero dispari
  if (numero%2) {
    //Inserire numero dispari nell'array
    arrayVuoto.push(numero);
    console.log("Il numero è dispari")
  }
}

//Stampo
console.log(arrayVuoto);
