const minTag = document.getElementById('minutes');
const secTag = document.getElementById('seconds');
const msecTag = document.getElementById('miliseconds');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const clearBtn = document.getElementById('clear');
const recordBtn = document.getElementById('record');
const recordList = document.getElementById('recordList');
let min = 0, sec = 0, msec = 0;
let id = null;
function display() {
  minTag.innerText = min < 10 ? "0" + min : min;
  secTag.innerText = sec < 10 ? "0" + sec : sec;
  msecTag.innerText = msec < 10 ? "0" + msec : msec;
}
function start() {
  if (!id) {
    id = setInterval(() => {
      if (msec < 90) {
        msec += 10;
      } else if (sec < 59) {
        msec = 0;
        sec++;
      } else {
        msec = 0;
        sec = 0;
        min++;
      }
      display();
    }, 100);
  }
}
function pause() {
  clearInterval(id);
  id = null;
}
function stop() {
  clearInterval(id);
  id = null;
}
function clearWatch() {
  stop();
  min = sec = msec = 0;
  display();
  recordList.innerHTML = ''; // Clear records
}
function recordTime() {
  const timeString = `${minTag.innerText}:${secTag.innerText}:${msecTag.innerText}`;
  const li = document.createElement('li');
  li.textContent = timeString;
  recordList.appendChild(li);
}
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);
clearBtn.addEventListener('click', clearWatch);
recordBtn.addEventListener('click', recordTime);