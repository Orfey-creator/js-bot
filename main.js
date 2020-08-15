'use strick';

alert("Загадывание случайного числа от 1 до 100");
const gameNubmer = function getNumber() {
  let min = 0;
  function createNumber(max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return createNumber(100);
};
console.log(gameNubmer());

const checkNum = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function() {
  playerNumber = prompt("Угадай число от 1 до 100");
  if (playerNumber === null) {
    return;
  }
  if (checkNum(playerNumber)) {
    if (playerNumber > gameNubmer()) {
      alert("Загаданное число меньше");
      game();
    }
    if ( playerNumber < gameNubmer()) {
      alert("Загаданное число больше");
      game();
    }
    if (playerNumber === gameNubmer()) {
      alert("Вы победили!");

    }
    
  } else {
    alert("Введи число!");
    game();
  }
  
};

 game();