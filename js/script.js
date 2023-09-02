const hoursEl = document.querySelector(`#hours`)
const hours_separator = document.querySelector(`#hours_separator`)
const minutesEL = document.querySelector(`#minutes`)
const secondsEL = document.querySelector(`#seconds`)
const millisecondsEL = document.querySelector(`#milliseconds`)
const startBtn = document.querySelector(`#startBtn`)
const pauseBtn = document.querySelector(`#pauseBtn`)
const resumeBtn = document.querySelector(`#resumeBtn`)
const resetBtn = document.querySelector(`#resetBtn`)

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
     if(!isPaused) {
        milliseconds += 10;

        if(milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        }

        if(seconds === 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes === 60) {
            hours++;
            minutes = 0;
            hoursEl.style.display = `block`;
            hours_separator.style.display = `block`;
        }

        hoursEl.textContent = formatTime(hours);
        minutesEL.textContent = formatTime(minutes);
        secondsEL.textContent = formatTime(seconds);
        millisecondsEL.textContent = formatMilliseconds(milliseconds);
     }   

    }, 10);

    startBtn.style.display = `none`;
    pauseBtn.style.display = `block`;
   
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = `none`;
    resumeBtn.style.display = `block`;
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = `block`;
    resumeBtn.style.display = `none`;
}

function resetTimer() {
    clearInterval(interval);
    isPaused = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hoursEl.textContent = `00`;
    minutesEL.textContent = `00`;
    secondsEL.textContent = `00`;
    millisecondsEL.textContent = `000`;


    hoursEl.style.display = `none`;
    hours_separator.style.display = `none`;
    startBtn.style.display = `block`;
    pauseBtn.style.display = `none`;
    resumeBtn.style.display = `none`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, `0`) : time;
}
