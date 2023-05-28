const AnalogClock = ($container) => {
  const analogClockBody = document.querySelector(".analog-clock");
  const div = document.createElement('div');
  
  /* html element 동적 생성하기 시작 */
  for (let i = 1; i <= 3; i++){
    analogClockBody.insertAdjacentHTML('beforeend', `<div class='hand' ></div>`)
  }

  const handdleClock =document.querySelectorAll('.hand')
  handdleClock[0].className += ' hour';
  handdleClock[1].className += ' minute';
  handdleClock[2].className += ' second';


  for (let i = 1; i <= 12; i++){
    analogClockBody.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`)
  }
  /*html element 동적 생성하기 끝  */

  
};

export default AnalogClock;
