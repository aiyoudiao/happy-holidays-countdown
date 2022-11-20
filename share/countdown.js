class CountdownTimer {
  constructor({
    selector,
    targetDate,
    backgroundColor = null,
    foregroundColor = null,
  }) {
    this.selector = selector;
    console.log("selector@", selector);
    this.targetDate = targetDate;
    this.backgroundColor = backgroundColor;
    this.foregroundColor = foregroundColor;

    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
      secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
    };
  }

  getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((total / 1000 / 60) % 60);
    const secs = Math.floor((total / 1000) % 60);
    return {
      total,
      days,
      hours,
      mins,
      secs,
    };
  }

  updateTimer(timer) {
    const { days, hours, mins, secs } = timer;
    this.refs.days.textContent = Math.abs(days);
    this.refs.hours.textContent = Math.abs(hours);
    this.refs.mins.textContent = Math.abs(mins);
    this.refs.secs.textContent = Math.abs(secs);
  }

  updateColors() {
    if (this.backgroundColor != null) {
      this.refs.days.style.background = this.backgroundColor;
      this.refs.hours.style.background = this.backgroundColor;
      this.refs.mins.style.background = this.backgroundColor;
      this.refs.secs.style.background = this.backgroundColor;
    }

    if (this.foregroundColor != null) {
      this.refs.days.style.color = this.foregroundColor;
      this.refs.hours.style.color = this.foregroundColor;
      this.refs.mins.style.color = this.foregroundColor;
      this.refs.secs.style.color = this.foregroundColor;
    }
  }

  startTimer() {
    //const timer = this.getTimeRemaining(this.targetDate);
    //this.updateTimer(timer);
    //this.updateColors();

    var interval = setInterval(() => {
      const timer = this.getTimeRemaining(this.targetDate);
      // if (timer.total <= 0) {
      //   this.updateTimer(0, 0, 0, 0);
      //   // startConfetti();
      //   clearInterval(interval);
      // } else {
      this.updateTimer(timer);
      // }
    }, 1000);
  }
}

export default CountdownTimer;
