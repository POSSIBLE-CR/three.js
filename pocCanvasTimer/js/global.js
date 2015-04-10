var Clock = {
  totalSeconds: 0,

  setSeconds : function(seconds) {
    self = this;
    this.totalSeconds = seconds;
    //- must clear interval in case user decides to switch between timers while the countdown is on.
    clearInterval(this.interval);
    delete this.interval;
    //- start the clock!
    this.start();
  },

  start: function () {
    var self = this;
    var display = document.getElementById('time');
    var minutes, seconds;

    
      this.interval = setInterval(function () {
        
        if (self.totalSeconds > 0) {
          //- keep counting down as long as we haven't run out of seconds.
          self.totalSeconds -= 1;
          minutes = Math.floor(self.totalSeconds / 60 % 60);
          seconds = parseInt(self.totalSeconds % 60);

          //- add a nifty little 0 to the left of single-digit numbers.
          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;
          display.textContent = minutes + ":" + seconds;
        }  else {
            //- the countdown reached its end. reset the display.
            clearInterval(this.interval);
            delete this.interval;
            display.textContent = "ti:me";
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

document.getElementById('pause').addEventListener('click', function () { Clock.pause(); }, false);
document.getElementById('resume').addEventListener('click', function () { Clock.resume(); }, false);
document.getElementById('fiveMinutes').addEventListener('click', function () { Clock.setSeconds(300); }, false);
document.getElementById('tenMinutes').addEventListener('click', function () { Clock.setSeconds(600); }, false);