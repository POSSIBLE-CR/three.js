var Clock = {
  totalSeconds: 0,

  start: function () {
    var self = this;
    var fiveMinutes = 60 * 5;
    var duration = fiveMinutes;
    var timer = duration, minutes, seconds;
    display = document.querySelector('#time');

    this.interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(this.interval);
        }
    }, 1000);
  },

  pause: function () {
    clearInterval(this.interval);
    delete this.interval;
  },

  resume: function () {
    if (!this.interval) this.start();
  }
};

Clock.start();

document.getElementById('pause').addEventListener('click', function () { Clock.pause(); }, false);
document.getElementById('resume').addEventListener('click', function () { Clock.resume(); }, false);