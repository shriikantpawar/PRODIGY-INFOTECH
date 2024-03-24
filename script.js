const timer = document.querySelector('.timer');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
const lapList = document.querySelector('#lap-list');

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let lapCounter = 1;

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!startTime) {
        startTime = Date.now();
    }

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateTimerDisplay();
    }, 10);

    startButton.disabled = true;
    pauseButton.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    startButton.disabled = false;
    pauseButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    startTime = 0;
    elapsedTime = 0;
    lapCounter = 1;

    updateTimerDisplay();
    lapList.innerHTML = '';

    startButton.disabled = false;
    pauseButton.disabled = true;
}

function updateTimerDisplay() {
    const milliseconds = elapsedTime % 1000;
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
    return String(number).padStart(length, '0');
}
