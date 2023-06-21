class AnalogClock {
  constructor($container) {
    this.$container = $container;
    this.createClockElements();
    this.setClock();
    setInterval(() => this.setClock(), 1000);
  }

  createClockElements() {
    const handClasses = ['hour', 'minute', 'second'];
    handClasses.forEach(handleClass => {
      this.$container.insertAdjacentHTML('beforeend', `<div class='hand ${handClasses}' ></div>`);
    });

    const handdleClock = this.$container.querySelectorAll('.hand');
    handdleClock[0].className += ' hour';
    handdleClock[1].className += ' minute';
    handdleClock[2].className += ' second';

    for (let i = 1; i <= 12; i++) {
      this.$container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
    }
  }

  setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const degSec = seconds * (360 / 60);
    const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);
    const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);

    const handdleClock = this.$container.querySelectorAll('.hand');
    handdleClock[2].style.setProperty('--deg', `${degSec}`);
    handdleClock[1].style.setProperty('--deg', `${degMin}`);
    handdleClock[0].style.setProperty('--deg', `${degHour}`);
  }
}

export default AnalogClock;
