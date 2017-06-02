// scripts.js

//wszystkie elementy 'button'
var getButton = document.getElementsByClassName('button');
console.log(getButton);


//pętla
for (var i=0 ; i<getButton.length ; i++) {
    alert(getButton[i].innerText);
    }
