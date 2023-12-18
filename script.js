// Matrix Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let matrix = "01";
matrix = matrix.split("");

const font_size = 10;
let device_pixel_ratio = window.devicePixelRatio || 1;
let drops = [];
let animationInterval;

function resizeCanvas() {
  canvas.width = window.innerWidth * device_pixel_ratio;
  canvas.height = window.innerHeight * device_pixel_ratio;
  ctx.scale(device_pixel_ratio, device_pixel_ratio);
}

function initializeDrops() {
  const columns = Math.ceil(canvas.width / font_size);
  drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
  }

  return drops;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);

    if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = Math.floor(Math.random() * -canvas.height / font_size);
    }

    drops[i]++;
  }
}

function initialize() {
  clearInterval(animationInterval);
  resizeCanvas();
  drops = initializeDrops();
  draw();
  animationInterval = setInterval(draw, 35);
}

window.addEventListener("resize", initialize);
initialize();

// Countdown Logic
function updateCountdown() {
  const now = new Date();
  const targetDate = new Date("December 24, 2023 15:30:00 GMT+0400");
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("countdown").innerText = "Time's up!";
  }
}

// Initialize Countdown
setInterval(updateCountdown, 1000);

const π = Math.PI 
console.log(π)