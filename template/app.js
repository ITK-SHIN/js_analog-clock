import AnalogClock from './AnalogClock.js';

/* document.querySelectorAll('.analog-clock').forEach(AnalogClock); */

/*   document.querySelectorAll('.analog-clock') */
/* 
AnalogClock();  */


 const clocks = document.querySelectorAll('.analog-clock');
    clocks.forEach(clock => new AnalogClock(clock));