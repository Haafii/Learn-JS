const squares = document.querySelectorAll(".square");
const timesClicked = {
  red: 0,
  yellow: 0,
  green: 0,
};
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

const clearGameButton = document.getElementById("clear-game");
clearGameButton.onclick = () => clearScore();

function clearScore() {
  timesClicked.red = 0;
  timesClicked.green = 0;
  timesClicked.yellow = 0;
  squares.forEach((square) => {
    square.innerText = '';
  });
}
