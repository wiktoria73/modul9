// scripts.js

var womenNames = ['Ania', 'Asia', 'Zofia'];
var menNames = ['Adam', 'Marian', 'Stefan'];

// łączenie tablic
var allNames = womenNames.concat(menNames);
// console.log(allNames);

//powtórzenie wartości

var newName = 'Tadeusz';
  if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
  }
console.log(allNames);