class AnalogClock {
  constructor(container) {
    this.container = container;
    this.createClock();
    this.startClock();
  }

  createClock() {
    for (let i = 1; i <= 3; i++) {
      this.container.insertAdjacentHTML('beforeend', `<div class='hand'></div>`);
    }
    const hands = this.container.querySelectorAll('.hand');
    hands[0].classList.add('hour');
    hands[1].classList.add('minute');
    hands[2].classList.add('second');

    for (let i = 1; i <= 12; i++) {
      this.container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
    }
  }

  startClock() {
    setInterval(() => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const degSec = seconds * (360 / 60);
      const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);
      const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);

      const hands = this.container.querySelectorAll('.hand');
      hands[0].style.setProperty('--deg', `${degHour}`);
      hands[1].style.setProperty('--deg', `${degMin}`);
      hands[2].style.setProperty('--deg', `${degSec}`);
    }, 1000);
  }
}

export default AnalogClock;