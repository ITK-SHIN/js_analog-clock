const AnalogClock = ($container) => {
  /********************************  html element 동적 생성하기 시작 ***********************/
  const handClasses = ['hour', 'minute', 'second']
  handClasses.forEach((handleClass) => {
  $container.insertAdjacentHTML('beforeend', `<div class='hand ${handleClass}' ></div>`);
}) //리플로우, 리렌더링 -> fragment 사용하면 좋을것. 

  const [handdleHour, handdleMinute, handdleSecond] = $container.querySelectorAll('.hand');

  for (let i = 1; i <= 12; i++){
    $container.insertAdjacentHTML('beforeend', `<div class="time time${i}">|</div>`);
  } //리플로우, 리렌더링 -> fragment 사용하면 좋을것. 
  /************************  html element 동적 생성하기 끝  ***********************************/

  /*********************  자바스크립트로 --deg 값 변경하기 시작 *************************/
const setClock = () => {
  const now = new Date();
  const seconds = now.getSeconds();  // 0 ~ 59 사이 정수 반환
  const minutes = now.getMinutes(); // 0 ~ 59 사이 정수 반환
  const hours = now.getHours();  // 0 ~ 23 사이 정수반환

   //초침 , 분침 , 시침  -> 차례대로 각도
  //초침 -> 1초당 몇도 회전
  const degSec = seconds * (360 / 60);   //ex) 5초 -> 5 * 6 = 30도 
  const degMin = minutes * (360 / 60) + (degSec/ 60);  // ex) 5분 -> 5 * 6 = 30도
  const degHour = (hours * 360  +   degMin) /12;
   //시침 -> 1시간당 30도, 1분당 몇도회전
    // ex) 4시 -> ex) 4 * 30 = 120도
    //ex2) 4시 15분 -> 4 *30 + 15 * 1/2

  handdleSecond.style.setProperty('--deg', `${degSec}`);
  handdleMinute.style.setProperty('--deg', `${degMin}`);
  handdleHour.style.setProperty('--deg', `${degHour}`);
}
setClock();
setInterval(setClock, 1000);
};

export default AnalogClock;

//첫 번째 for문 ->  forEach 메소드를 사용하여 간단하게 리팩토링
//setInterval 함수 내부 코드를 setClock 함수로 분리하여 중복을 제거
//setInterval 함수가 호출될 때마다 setClock 함수가 실행되어 시계의 초침, 분침, 시침이 정확한 시간을 가리키도록