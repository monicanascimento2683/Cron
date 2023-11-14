const minutes1 = document.querySelector("#minutes");
const secondes1 = document.querySelector("#secondes");
const milisecondes1 = document.querySelector("#milisecondes");

const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const resume = document.querySelector("#resume");
const reset = document.querySelector("#reset");

let interval;
let minutes = 0;
let secondes = 0;
let milisecondes = 0;

let isPaused = false;

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", resumeTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milisecondes += 10;

      if (milisecondes === 1000) {
        secondes++;
        milisecondes = 0;
      }
      if (secondes === 60) {
        minutes++;
        secondes = 0;
      }
      minutes1.textContent = formatTimer(minutes);
      secondes1.textContent = formatTimer(secondes);
      milisecondes1.textContent = formatMilisecondes(milisecondes);
    }
  }, 10);
  start.style.display = "none";
  pause.style.display = "block";
}
function pauseTimer() {
  isPaused = true;
  pause.style.display = "none";
  resume.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pause.style.display = "block";
  resume.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  secondes = 0;
  milisecondes = 0;

  minutes1.textContent = "00";
  secondes1.textContent = "00";
  milisecondes1.textContent = "000";

  start.style.display = "block";
  pause.style.display = "none";
  resume.style.display = "none";
}
function formatTimer(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilisecondes(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
