// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var dinosaurUpper = dinosaur.toUpperCase();
console.log(dinosaurUpper);

var textReplace = text.replace('Velociraptor', dinosaurUpper);
console.log(textReplace);

//połowa znaków
console.log(textReplace.length/2);

//var textHalf = textReplace.substr(0, 72);
//console.log(textHalf);

var textHalf = textReplace.substr(0, textReplace.length/2);
console.log(textHalf);