/* import AnalogClock from './AnalogClock.js'; */
import AnalogClock from './ClassAnalog.js';

/* document.querySelectorAll('.analog-clock').forEach(AnalogClock); */
const analogClocks = document.querySelectorAll('.analog-clock');

analogClocks.forEach($container => {
         new AnalogClock($container)
})