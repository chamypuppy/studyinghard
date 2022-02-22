const clock = document.querySelector("#clock"); /* 혹은 "h2#clock" */

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2 ,"0");
  const minutes = String(date.getMinutes()).padStart(2 ,"0");
  const seconds = String(date.getSeconds()).padStart(2 ,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); /* 웹 새로고침하면 1초 기다리지 않고 시간이 바로 나오게 즉시 호출한 것 */
setInterval(getClock, 1000); /* 그리고 나서 매초마다(1000(ms)=1초) getClock 다시 실행(실시간으로) */


//우리는 지금 매초마다 시계처럼 보이는 새로운 date object를 만들고 있는 것이다! 
