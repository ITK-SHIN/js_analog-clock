const AnalogClock = ($container) => {
  $container.innerHTML = `  
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
      <div class="time time12">|</div> `;
​
  // console.log(hours, minutes, seconds);
​
  setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
​
    const hourDeg = (360 / 12) * hours + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;
​
    // document.querySelector(
    //   ".hand.hour"
    // ).style.transform = `translate3D(-50%, 0, 0) rotate(calc(${hourDeg} * 1deg))`;
​
    // document.querySelector(
    //   ".hand.minute"
    // ).style.transform = `translate3D(-50%, 0, 0) rotate(calc(${minuteDeg} * 1deg))`;
    // document.querySelector(
    //   ".hand.second"
    // ).style.transform = `translate3D(-50%, 0, 0) rotate(calc(${secondDeg} * 1deg))`;
​
    document.querySelector(".hand.hour").style.setProperty("--deg", hourDeg);
    document
      .querySelector(".hand.minute")
      .style.setProperty("--deg", minuteDeg);
    document
      .querySelector(".hand.second")
      .style.setProperty("--deg", secondDeg);
  }, 1000);
};
​
export default AnalogClock;