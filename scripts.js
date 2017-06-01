// scripts.js

function drawTree(i) {
  for (i = 1; i < 6; i++) {
    var star = '';

    for (j = i ; j < 6; j++) {
      star += '*';
    }
    console.log(star);
  }
}
drawTree();