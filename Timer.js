let timer;
let totalSeconds;
let isRunning = false;
let remainingTime = 0;

function startTimer() {
  const hours = parseInt(document.getElementById('hoursInput').value) || 0;
  const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
  const seconds = parseInt(document.getElementById('secondsInput').value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert('Please enter a valid time');
    return;
  }

  if (!isRunning) {
    if (remainingTime === 0) {
      remainingTime = totalSeconds;
    }
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById('hoursInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('secondsInput').value = '';
  document.getElementById('countdownDisplay').innerHTML = '';
  isRunning = false;
  remainingTime = 0;
}

function updateTimer() {
  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timer);
    document.getElementById('countdownDisplay').innerHTML = 'Time is up!';
    isRunning = false;
  } else {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    document.getElementById('countdownDisplay').innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
