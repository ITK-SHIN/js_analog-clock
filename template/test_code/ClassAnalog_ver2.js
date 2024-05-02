// 단일 책임 원칙 적용
class AnalogClock {
    constructor($container) {
        this.$container = $container;
        this.createClockElements();
        this.startClock();
    }

    createClockElements() {
        this.createHands();
        this.createTimeMarkers();
    }

    createHands() {
        const handClasses = ['hour', 'minute', 'second'];
        handClasses.forEach(handleClass => {
            this.$container.insertAdjacentHTML('beforeend', `<div class='hand ${handleClass}' ></div>`);
        });
    }

    createTimeMarkers() {
        for (let i = 1; i <= 12; i++) {
            this.$container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
        }
    }

    startClock() {
        this.setClock();
        setInterval(() => this.setClock(), 1000);
    }

    setClock() {
        const [handdleHour, handdleMinute, handdleSecond] = this.$container.querySelectorAll('.hand');

        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const degSec = this.calculateDegree(seconds, 60);
        const degMin = this.calculateDegree(minutes, 60) + this.calculateDegree(seconds, 60 * 60);
        const degHour = this.calculateDegree(hours, 12) + this.calculateDegree(minutes, 12 * 60);

        this.setHandPosition(handdleSecond, degSec);
        this.setHandPosition(handdleMinute, degMin);
        this.setHandPosition(handdleHour, degHour);
    }

    calculateDegree(value, base) {
        return value * (360 / base);
    }

    setHandPosition(hand, degree) {
        hand.style.setProperty('--deg', `${degree}`);
    }
}

export default AnalogClock;
