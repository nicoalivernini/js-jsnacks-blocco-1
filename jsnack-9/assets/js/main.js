//Numeri
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0;

var media = 0;

// Somma e media

for (var i = 0; i < numeri.length; i++) {
  // Somma primi 10 numeri
  somma = somma + parseInt(numeri[i]);
  // Media primi 10 numeri
  media = somma / 10;
}

//Stampo somma e media
console.log(somma);
console.log(media);
