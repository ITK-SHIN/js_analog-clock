let $hand = document.querySelectorAll(".analog-clock .hand");
//시간 불러오기. new Date()로 현재 시간 먼저 변수로 선언하고, 시간, 분, 초를 가져온다.
const current = new Date();
const hour = current.getHours();
const minute = current.getMinutes();
const second = current.getSeconds();

const AnalogClock = ($container) => {
    // do something!
    //시침, 분침, 초침 변수 선언
    const $hourHand = document.querySelector(".hand.hour");
    const $minuteHand = document.querySelector(".hand.minute");
    const $secondHand = document.querySelector(".hand.second");
    //HTML div 요소 추가
    const $clockHTML = document.querySelector(".analog-clock"); //클래스 식별자. 누락 주의
    //$clockHTML 변수는 이미 선택한 요소를 참조하는 것이므로 .document를 쓰면 안된다.
    $clockHTML.innerHTML = `
      <div class="hand hour"></div>
      <div class="hand minute"></div>
      <div class="hand second"></div>
      <div class="time time1">|</div>
      <div class="time time2">|</div>
      <div class="time time3">|</div>
      <div class="time time4">|</div>
      <div class="time time5">|</div>
      <div class="time time6">|</div>
      <div class="time time7">|</div>
      <div class="time time8">|</div>
      <div class="time time9">|</div>
      <div class="time time10">|</div>
      <div class="time time11">|</div>
      <div class="time time12">|</div>
    `;
}; //innerHTML로 이미 요소를 추가했는데 appendChild로 또 추가하려다 보니 오류 발생

//CSS 변수 값을 변경해 시침/분침/초침 각도를 변경한다.

$hourHand.style.setProperty("--deg", hour * (360 / 12) + minute * (360 / 60 / 60) + second * (360 / 60 / 60 / 60));
$minuteHand.style.setProperty("--deg", minute * (360 / 60 / 60) + second * (360 / 60 / 60 / 60));
$secondHand.style.setProperty("--deg", second * (360 / 60 / 60 / 60));

export default AnalogClock;
