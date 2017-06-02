// scripts.js

var buttonElem = document.getElementById('addElem')
var list = document.getElementById('list')

buttonElem.addEventListener('click', function(e) {
  var element = document.createElement('li');
  //console.log(element);
  
  var level = document.getElementsByTagName('li');
  //console.log(level.length)

  element.innerHTML = 'item ' + level.length;
  list.appendChild(element);
})
