const AnalogClock = ($container) => {
  /********************************  html element 동적 생성하기 시작 ***********************/

  const handClasses = ['hour', 'minute', 'second']
  handClasses.forEach(handleClass => {
  $container.insertAdjacentHTML('beforeend', `<div class='hand ${handClasses}' ></div>`);
})

  const handdleClock =$container.querySelectorAll('.hand');
  handdleClock[0].className += ' hour';
  handdleClock[1].className += ' minute';
  handdleClock[2].className += ' second';

  for (let i = 1; i <= 12; i++){
    $container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
  }
  /************************  html element 동적 생성하기 끝  ***********************************/

  /*********************  자바스크립트로 --deg 값 변경하기 시작 *************************/
function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();  // 0 ~ 59 사이 정수 반환
  const minutes = now.getMinutes(); // 0 ~ 59 사이 정수 반환
  const hours = now.getHours();  // 0 ~ 23 사이 정수반환

   //초침 , 분침 , 시침  -> 차례대로 각도
  //초침 -> 1초당 몇도 회전
  const degSec = seconds * (360 / 60);   //ex) 5초 -> 5 * 6 = 30도 
  const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);  // ex) 5분 -> 5 * 6 = 30도
  const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);
   //시침 -> 1시간당 30도, 1분당 몇도회전
    // ex) 4시 -> ex) 4 * 30 = 120도
    //ex2) 4시 15분 -> 4 *30 + 15 * 1/2
  handdleClock[2].style.setProperty('--deg', `${degSec}`);
  handdleClock[1].style.setProperty('--deg', `${degMin}`);
  handdleClock[0].style.setProperty('--deg', `${degHour}`);
}

  setClock();
  setInterval(setClock, 1000);
};




export default AnalogClock;

//첫 번째 for  forEach 메소드를 사용하여 간단하게 리팩토링
//setInterval 함수 내부의 코드를 setClock 함수로 분리하여 중복을 제거
//setInterval 함수가 호출될 때마다 setClock 함수가 실행되어 시계의 초침, 분침, 시침이 정확한 시간을 가리키도록