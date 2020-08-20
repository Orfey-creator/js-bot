'use strick';
let gameNumber;

alert("Загадывание случайного числа от 1 до 100");
// function getNumber(min) {
//   function createNumber(max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   return createNumber;
// }

// let getGameNumber = getNumber(1);
// gameNumber = getGameNumber(100);
// console.log(gameNumber);

const checkNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  gameNumber = Math.floor(Math.random() * (100 - 1)) + 1;
  const innerGame = function () {
    playerNumber = prompt("Угадай число от 1 до 100");
    console.log(playerNumber);

    if (playerNumber == null) {
      return;
    }
    if (checkNum(playerNumber)) {
      if (playerNumber > gameNumber) {
        alert("Загаданное число меньше");
        console.log(gameNumber);
        innerGame();
      }
      if (playerNumber < gameNumber) {
        alert("Загаданное число больше");
        console.log(gameNumber);
        innerGame();
      }
      if (playerNumber == gameNumber) {
        console.log(gameNumber);
        alert("Вы победили!");
        return;
      }

    } else {
      alert("Введи число!");
      innerGame();
    }
  };
  innerGame();
  
  
};

game();