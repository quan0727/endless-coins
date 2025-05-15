const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let coins = [];
let score = 0;

function createCoin() {
  coins.push({
    x: Math.random() * (canvas.width - 30),
    y: -30,
    size: 30,
    speed: 2 + Math.random() * 3,
  });
}

function drawCoin(coin) {
  ctx.fillStyle = "gold";
  ctx.beginPath();
  ctx.arc(coin.x + coin.size / 2, coin.y + coin.size / 2, coin.size / 2, 0, Math.PI * 2);
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  coins.forEach((coin, i) => {
    coin.y += coin.speed;
    drawCoin(coin);
    if (coin.y > canvas.height) coins.splice(i, 1);
  });

  ctx.fillStyle = "white";
  ctx.font = "24px sans-serif";
  ctx.fillText("得分: " + score, 10, 30);

  requestAnimationFrame(update);
}

canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  coins.forEach((coin, i) => {
    const dx = x - (coin.x + coin.size / 2);
    const dy = y - (coin.y + coin.size / 2);
    if (Math.sqrt(dx * dx + dy * dy) < coin.size / 2) {
      coins.splice(i, 1);
      score++;
    }
  });
});

setInterval(createCoin, 800);
update();
