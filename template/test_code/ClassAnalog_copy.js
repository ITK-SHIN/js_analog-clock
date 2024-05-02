class AnalogClock {
  #handleElements;

  constructor($container) {
    this.$container = $container;
    this.createClockElements();
    this.#handleElements = this.setHandleElements();
    this.setClock();
    setInterval(() => this.setClock(), 1000);
    
  }

  setHandleElements() {
        const [handdleHour, handdleMinute, handdleSecond] = this.$container.querySelectorAll('.hand');
    return ({
      handdleMinute,
      handdleHour,
      handdleSecond
    }
)
  }

  createClockElements() {
    const handClasses = ['hour', 'minute', 'second'];

    handClasses.forEach(handleClass => {
    this.$container.insertAdjacentHTML('beforeend', `<div class='hand ${handleClass}' ></div>`);
    });

    for (let i = 1; i <= 12; i++) {
      this.$container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
    }
  }

  setClock() {
    const { handdleHour, handdleMinute, handdleSecond } = this.#handleElements
    
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const degSec = seconds * (360 / 60);
    const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);
    const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);

    handdleSecond.style.setProperty('--deg', `${degSec}`);
    handdleMinute.style.setProperty('--deg', `${degMin}`);
    handdleHour.style.setProperty('--deg', `${degHour}`);
  }
}

export default AnalogClock;
