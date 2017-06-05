//nowa gra - guzik
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//wybór gracza
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () {
  playerPick('rock')
});
pickPaper.addEventListener('click', function () {
  playerPick('paper')
});
pickScissors.addEventListener('click', function () {
  playerPick('scissors')
});

//wartości początkowe
var gameState = 'nonstarted',
    player = {
      name: '',
      score: 0
    },
    computer = {
      score: 0
    };

//wyświetlanie elementów gry
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started' :
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
    break;
    case 'ended':
      newGameBtn.innerText = 'Play again!';
    case 'nonStarted':
    default:
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      resultsElem.style.display = 'none';
  }
}
setGameElements();

//rozpoczęcie gry
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//rozpoczęcie gry - nowa gra, zagraj jeszcze raz
function newGame() {
  player.name = prompt('Please enter your name');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}


//wybór gracza
function playerPick(playerPick) {
  console.log(playerPick);
}

//wybór komputera
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//wybór na stronę
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;
}

//przyznawanie punktów
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

      if (playerPick == computerPick) {
          winnerIs = 'none';
      }
      else if (
          (computerPick == 'rock' && playerPick == 'scissors') ||
          (computerPick == 'scissors' && playerPick == 'paper') ||
          (computerPick == 'paper' && playerPick == 'rock')
      ) {
        winnerIs = 'computer';
      }

      if (winnerIs == 'player') {
          playerResultElem.innerHTML = "Win!";
          player.score++;
          console.log('Player score: ' + player.score);
      } else if (winnerIs == 'computer') {
          computerResultElem.innerHTML = "Win!";
          computer.score++;
          console.log('Computer score: ' + computer.score);
      }

/*
      // zakończenie, po kilku rundach
    function lastScores() {
      if (player.score == 3) {
        console.log('You win!');
        alert('You win!');
        newGame();
      } else if (computer.score == 3) {
        console.log('You lose!');
        alert('You lose!');
        newGame();
      }
 }
setGamePoints();
lastScores();
*/

}


function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//wynik
function setGamePoints () {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score;
}

// zakończenie, po kilku rundach
function lastScores() {
  if (player.score == 3) {
    console.log('You win!');
    alert('You win!');
    newGame();

  } else if (computer.score == 3) {
    console.log('You lose!');
    alert('You lose!');
    newGame();
  }
}
setGamePoints();
lastScores();
