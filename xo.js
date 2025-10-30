const parts = document.querySelectorAll(".part");
const statusText = document.querySelector(".statusText");
const restartBtn = document.querySelector(".restartBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

statusText.textContent = `${currentPlayer}-ийн ээлж`;

parts.forEach((part, index) => {
  part.addEventListener("click", () => {
    if (!running || board[index] !== "") return;

    board[index] = currentPlayer;
    part.textContent = currentPlayer;

    if (checkWin()) {
      statusText.textContent = `${currentPlayer} яллаа! 🎉`;
      running = false;
    } else if (!board.includes("")) {
      statusText.textContent = "Тэнцлээ 🤝";
      running = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      statusText.textContent = `${currentPlayer}-ийн ээлж`;
    }
  });
});

restartBtn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  running = true;
  currentPlayer = "X";
  statusText.textContent = `${currentPlayer}-ийн ээлж`;
  parts.forEach(p => p.textContent = "");
});

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // мөрүүд
    [0,3,6], [1,4,7], [2,5,8], // баганууд
    [0,4,8], [2,4,6]           // диагональ
  ];
  return wins.some(([a, b, c]) => 
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
}
