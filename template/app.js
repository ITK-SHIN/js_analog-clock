/*  import AnalogClock from './AnalogClock.js'; 

 document.querySelectorAll('.analog-clock').forEach(AnalogClock); 
 */


 /* class로 바꿔본 코드 */
 import AnalogClock from './ClassAnalog.js';

document.querySelectorAll('.analog-clock').forEach($container => {
         new AnalogClock($container)
})  