const AnalogClock = ($container) => {
  /********************************  html element 동적 생성하기 시작 ***********************/

  const handClasses = ['hour', 'minute', 'second']
  for (let i = 0; i < handClasses.length; i++){
    $container.insertAdjacentHTML('beforeend', `<div class='hand ${handClasses[i]}' ></div>`);
  }
  const handdleClock =$container.querySelectorAll('.hand');
  handdleClock[0].className += ' hour';
  handdleClock[1].className += ' minute';
  handdleClock[2].className += ' second';

  for (let i = 1; i <= 12; i++){
    $container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
  }
  /************************  html element 동적 생성하기 끝  ***********************************/

  /*********************  자바스크립트로 --deg 값 변경하기 시작 *************************/
 setInterval(() => {
 
    //현재 시간 가져오기
    const now = new Date();

    //현재 시간을 단위로 추출
    const seconds = now.getSeconds();  // 0 ~ 59 사이 정수 반환
    const minutes = now.getMinutes();  // 0 ~ 59 사이 정수 반환
    const hours = now.getHours();  // 0 ~ 23 사이 정수반환

    //초침 , 분침 , 시침  -> 차례대로 각도
    //초침 -> 1초당 몇도 회전
    const degSec = seconds * (360 / 60);   // ex) 5초 -> 5 * 6 = 30도 

    //분침 -> 1분당 몇도, 1초당 몇도회전
    const degMin = minutes * (360 / 60) + seconds * (360 / 60 / 60);  // ex) 5분 -> 5 * 6 = 30도

    //시침 -> 1시간당 30도, 1분당 몇도회전
    // ex) 4시 -> ex) 4 * 30 = 120도
    //ex2) 4시 15분 -> 4 *30 + 15 * 1/2
    const degHour = hours * (360 / 12) + minutes * (360 / 12 / 60);

    handdleClock[2].style.setProperty('--deg', `${degSec}`);
    handdleClock[1].style.setProperty('--deg', `${degMin}`);
    handdleClock[0].style.setProperty('--deg', `${degHour}`);
  }, 1000);
};

export default AnalogClock;