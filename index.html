const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');
const instruction = document.getElementById('instruction');

let basketPosition = window.innerWidth / 2 - 75; // Center the basket
let ballPosition = { x: window.innerWidth / 2 - 15, y: 0 };
let score = 0;
const ballSize = 30; // Size of the ball

document.addEventListener('keydown', (event) => {
    moveBasket(event);
    // Hide the instruction message when the user starts playing
    if (instruction.style.display !== 'none') {
        instruction.style.display = 'none';
    }
});

function moveBasket(event) {
    const key = event.key;
    if (key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
        basket.style.left = `${basketPosition}px`;
    } else if (key === 'ArrowRight' && basketPosition < window.innerWidth - 160) {
        basketPosition += 20;
        basket.style.left = `${basketPosition}px`;
    }
}

function dropBall() {
    ballPosition.y += 5;
    ball.style.top = `${ballPosition.y}px`;

    if (ballPosition.y > window.innerHeight) {
        resetBall();
    }

    if (ballPosition.y > window.innerHeight - 90 &&
        ballPosition.x > basketPosition - 30 &&
        ballPosition.x < basketPosition + 160) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
        resetBall();
    }
}

function resetBall() {
    ballPosition = { x: Math.random() * (window.innerWidth - ballSize), y: 0 };
    ball.style.left = `${ballPosition.x}px`;
    ball.style.top = `${ballPosition.y}px`;
}

function createCloud() {
    const cloud = document.createElement('i');
    cloud.className = 'fas fa-cloud cloud-icon';
    cloud.style.top = `${Math.random() * 100}px`;
    cloud.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    document.querySelector('.relative').appendChild(cloud);

    setInterval(() => {
        const currentLeft = parseFloat(cloud.style.left);
        if (currentLeft > -50) {
            cloud.style.left = `${currentLeft - 1}px`;
        } else {
            cloud.remove();
        }
    }, 20);
}

function startGame() {
    setInterval(dropBall, 20);
    setInterval(createCloud, 2000);
}

startGame();
