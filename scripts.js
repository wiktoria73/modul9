// scripts.js

function drawTree(level) {
  for (i = 1; i < level; i++) {
    var star = '';

    for (j = level-i ; j < level; j++) {
      star += '*';
    }
    console.log(star);
  }
}
drawTree(6);