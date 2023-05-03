const playerOneNameDiv = document.getElementById("p1Name");
const playerTwoNameDiv = document.getElementById("p2Name");
const platerOneHeathDiv = document.getElementById("p1Health");
const platerTwoHeathDiv = document.getElementById("p2Health");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset");
const player1Name = prompt("Enter player 1 name:")
const player2Name = prompt("Enter player 2 name:")

class player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
  }
  strike(p1, p2, attackDamage) {
    let damageAmount = Math.ceil(Math.random() * attackDamage);
    p2.health -= damageAmount;
    if (p1.name == player1.name) {
      gameUpdate(player1, player2, game.isOver);
    } else {
      gameUpdate(player2, player1, game.isOver);
    }
    return `${p1.name} attacks ${p2.name} for ${damageAmount} damage`;
  }
  heal(p) {
    let healAmount = Math.ceil(Math.random() * 5);
    p.health += healAmount;
    if (p.name == player1.name) {
      gameUpdate(p, player2, game.isOver);
    } else {
      gameUpdate(player1, p, game.isOver);
    }
    return `${p.name} heals for ${healAmount}`;
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }
  declareWinner(isOver, p1, p2) {
    let message;
    if (isOver) {
      if (p1.health <= 0) {
        message = `${p2.name} wins`;
      } else {
        message = `${p1.name} wins`;
      }
    }
    document.getElementById("victory").play();
    return message;
  }
  reset(p1,p2){
    p1.health = 100
    p2.health =100
    game.isOver = false
    resultDiv.innerText = '' 
    gameUpdate(p1,p2,this.isOver)
  } 
}

let player1 = new player(player1Name, 100, 10);
let player2 = new player(player2Name, 100, 10);
let game = new Game();


const gameUpdate = (p1, p2, gameState) => {
  if (p1.name == player1.name) {
    playerOneNameDiv.innerText = p1.name;
    playerTwoNameDiv.innerText = p2.name;
    platerOneHeathDiv.innerText = p1.health;
    platerTwoHeathDiv.innerText = p2.health;
  } else {
    playerOneNameDiv.innerText = p2.name;
    playerTwoNameDiv.innerText = p1.name;
    platerOneHeathDiv.innerText = p2.health;
    platerTwoHeathDiv.innerText = p1.health;
  }
  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    resultDiv.innerText = game.declareWinner(gameState, p1, p2);
    return gameState;
  }
};

gameUpdate(player1, player2, game.isOver);


document.addEventListener("keydown", function (e) {
  if (e.key == "q" && player2.health > 0 && game.isOver == false) {
    player1.strike(player1, player2, player1.attackDamage);
    document.getElementById("p1attack").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "p" && player1.health > 0 && game.isOver == false) {
    player2.strike(player2, player1, player2.attackDamage);
    document.getElementById("p2attack").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "a" && player1.health >= 0 && game.isOver == false) {
    player1.heal(player1);
    document.getElementById("p1heal").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "l" && player2.health >= 0 && game.isOver == false) {
    player2.heal(player2);
    document.getElementById("p2heal").play();
  }
});

resetButton.onclick =()=> game.reset(p1,p2)