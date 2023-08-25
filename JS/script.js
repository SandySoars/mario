const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverMario = document.querySelector('.game-over-mario');

let isMarioJumping = false; 
let isGameOver = false; 
let startTime = Date.now(); 
let score = 0;

const jump = () => {
    if (!isMarioJumping && !isGameOver) {
        isMarioJumping = true;
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
            isMarioJumping = false; 
        }, 500);
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = '120px';
        
        mario.style.animation = 'none';
        mario.style.bottom = (marioPosition);

        mario.src = './Imagens/game-over.png';          
        mario.style.width = '150px';
        isGameOver = true; 
        clearInterval(loop);
    }

    if (!isMarioJumping && !isGameOver) {
        const currentTime = Date.now(); 
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); 

        score = elapsedSeconds; 

        const scoreElement = document.getElementById('scoreValue');
        scoreElement.textContent = score;
    }
}, 10);


document.addEventListener('keydown', jump);
