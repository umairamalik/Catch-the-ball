const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Cart properties
const cartWidth = 100;
const cartHeight = 20;
let cartX = (canvas.width - cartWidth) / 2;

// Ball properties
const ballRadius = 10;
let balls = [];

// Key press and touch variables
let rightPressed = false;
let leftPressed = false;
let touchStartX = null;

// Event listeners
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('touchstart', touchStartHandler);
document.addEventListener('touchmove', touchMoveHandler);
document.addEventListener('touchend', touchEndHandler);

// Create new ball
function createBall() {
    const x = Math.random() * (canvas.width - 2 * ballRadius) + ballRadius;
    balls.push({ x: x, y: -ballRadius, dy: 2 });
}

// Draw cart
function drawCart() {
    ctx.fillStyle = '#ff6347'; // Tomato color
    ctx.fillRect(cartX, canvas.height - cartHeight, cartWidth, cartHeight);
}

// Draw ball
function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd700'; // Gold color
    ctx.fill();
    ctx.closePath();
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCart();

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        drawBall(ball.x, ball.y);
        ball.y += ball.dy;

        // Check for collision with cart
        if (ball.y + ballRadius > canvas.height - cartHeight &&
            ball.x > cartX &&
            ball.x < cartX + cartWidth) {
            balls.splice(i, 1); // Remove ball
            i--; // Adjust index
        } else if (ball.y > canvas.height) {
            balls.splice(i, 1); // Remove ball
            i--; // Adjust index
        }
    }

    requestAnimationFrame(draw);
}

// Handle key down
function keyDownHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = true;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = true;
    }
}

// Handle key up
function keyUpHandler(event) {
    if (event.key === 'Right' || event.key === 'ArrowRight') {
        rightPressed = false;
    } else if (event.key === 'Left' || event.key === 'ArrowLeft') {
        leftPressed = false;
    }
}

// Move cart based on controls
function moveCart() {
    if (rightPressed && cartX < canvas.width - cartWidth) {
        cartX += 7;
    } else if (leftPressed && cartX > 0) {
        cartX -= 7;
    }
}

// Handle touch start
function touchStartHandler(event) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
}

// Handle touch move
function touchMoveHandler(event) {
    if (touchStartX === null) return;

    const touch = event.touches[0];
    const touchX = touch.clientX;

    if (touchX > touchStartX + 10 && cartX < canvas.width - cartWidth) {
        cartX += 10;
        touchStartX = touchX;
    } else if (touchX < touchStartX - 10 && cartX > 0) {
        cartX -= 10;
        touchStartX = touchX;
    }
}

// Handle touch end
function touchEndHandler() {
    touchStartX = null;
}

// Create balls at intervals
setInterval(createBall, 1000);

// Main game loop
function gameLoop() {
    moveCart();
    draw();
}

gameLoop();
