// document.querySelectorAll('.analog-clock').forEach(AnalogClock);  

 /* class 코드 */
 import AnalogClock from './ClassAnalog.js';

document.querySelectorAll('.analog-clock').forEach($container => {
         new AnalogClock($container)
})   