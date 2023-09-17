const MAX_ENEMY = 9;

const score = document.querySelector(".score"),
  start = document.querySelector(".start"),
  gameArea = document.querySelector(".gameArea"),
  car = document.createElement("div");

let music = new Audio("audio.mp3");

car.classList.add("car");

const setting = {
  start: false,
  score: 0,
  speed: 4,
  traffic: 2.5,
};

document.body.addEventListener("click", () => {
  var target = event.target;

  if (target.tagName != "BUTTON") return;

  target.style.background = "black";
});

start.addEventListener("click", function () {
  // setting.speed = 20;
  startGame();
});
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

function getQuantityElements(heightElement) {
  return document.documentElement.clientHeight / heightElement + 1;
}

const getRandomEnemy = (max) => Math.floor(Math.random() * max + 1);

function startGame() {
  music.play();

  start.classList.add("hide");
  gameArea.innerHTML = "";

  for (let i = 0; i < getQuantityElements(100); i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.top = i * 100 + "px";
    line.y = i * 100;
    gameArea.appendChild(line);
  }

  for (let i = 0; i < getQuantityElements(100 * setting.traffic); i++) {
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.y = -100 * setting.traffic * (i + 1);
    enemy.style.left =
      Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + "px";
    enemy.style.top = enemy.y + "px";
    enemy.style.background = `
    transparent
    url(img/enemy${getRandomEnemy(MAX_ENEMY)}.png)
    center / cover
    no-repeat`;
    gameArea.appendChild(enemy);
  }

  setting.score = 0;
  setting.start = true;
  gameArea.appendChild(car);
  car.style.left = "125px";
  car.style.top = "auto";
  car.style.bottom = "15px";
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
  requestAnimationFrame(playGame);
}

function playGame() {
  if (setting.start) {
    setting.score += setting.speed;
    score.innerHTML = "SCORE<br>" + setting.score;
    moveRoad();
    moveEnemy();
    if (keys.ArrowLeft && setting.x > 0) {
      setting.x -= setting.speed;
    }
    if (keys.ArrowRight && setting.x < gameArea.offsetWidth - car.offsetWidth) {
      setting.x += setting.speed;
    }
    if (keys.ArrowUp && setting.y > 0) {
      setting.y -= setting.speed;
    }
    if (
      keys.ArrowDown &&
      setting.y < gameArea.offsetHeight - car.offsetHeight
    ) {
      setting.y += setting.speed - 1.5;
    }

    car.style.left = setting.x + "px";
    car.style.top = setting.y + "px";

    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  if (keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = true;
  }
}

function stopRun(event) {
  if (keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = false;
  }
}

function moveRoad() {
  let lines = document.querySelectorAll(".line");
  lines.forEach(function (line) {
    line.y += setting.speed;
    line.style.top = line.y + "px";

    if (line.y >= document.documentElement.clientHeight) {
      line.y = -100;
    }
  });
}

function moveEnemy() {
  let enemy = document.querySelectorAll(".enemy");
  enemy.forEach(function (item) {
    let carRect = car.getBoundingClientRect();
    let enemyRect = item.getBoundingClientRect();

    if (
      carRect.top <= enemyRect.bottom &&
      carRect.right >= enemyRect.left &&
      carRect.left <= enemyRect.right &&
      carRect.bottom >= enemyRect.top
    ) {
      music.pause();
      music = new Audio("audio.mp3");
      setting.start = false;
      start.classList.remove("hide");
      start.style.top = score.offsetHeight + "px";
    }
    item.y += setting.speed / 1.5;
    item.style.top = item.y + "px";

    if (item.y >= document.documentElement.clientHeight) {
      item.y = -100 * setting.traffic;
      item.style.left =
        Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + "px";
    }
  });
}
