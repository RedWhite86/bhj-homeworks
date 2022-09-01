let timer = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

let seconds = timer.textContent.split(':');
let secondsSum = (seconds[0] * 3600) + (parseInt(seconds[1]) * 60) + parseInt(seconds[2]);

function countdown() {
  if (secondsSum > 0) {
    secondsSum--;
    const hours = secondsSum > 0 ? Math.floor(secondsSum / 3600) : 00;
    const minutes = secondsSum > 0 ? Math.floor((secondsSum - (hours * 3600)) / 60) : 00;
    const seconds = secondsSum > 0 ? (secondsSum - (hours * 3600) - (minutes * 60)) : 00;

    const hoursstr = hours.toString().length > 1 ? hours : '0' + hours;
    const minutesstr = minutes.toString().length > 1 ? minutes : '0' + minutes;
    const secondsstr = seconds.toString().length > 1 ? seconds : '0' + seconds;

    return (timer.innerHTML = hoursstr + ':' + minutesstr + ':' + secondsstr);
  } else {
  clearInterval(timerId);
  alert('Вы победили в конкурсе!')
  }
};