// scripts.js

var womenNames = ['Ania', 'Asia', 'Zofia'];
var menNames = ['Adam', 'Marian', 'Stefan'];

// łączenie tablic
var allNames = womenNames.concat(menNames);
console.log(allNames);

//dodanie imienia
//allNames.splice(1, 0, 'Tadek');
//console.log(allNames);

//spr. powtórzeń

var newName = 'Ania';
  if (allNames.indexOf(newName) === -1) {
    var x = allNames.push(newName);
  }
console.log(allNames);