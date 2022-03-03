const API_KEY = "나의 API KEY";

function onGeoOk(position){ /* position 인자가 js가 주는 GeolocationPosition object 정보를 받아오는 인자.*/
  const lat = position.coords.latitude; /* 위도 */
  const lon = position.coords.longitude; /* 경도 */
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; /* &units=metric을 추가하면 화씨 온도 -> 섭씨 온도로 바꿔준다. */
  fetch(url) /* 실제로 url에 갈 필요 없이 js에서 대신 url를 불러준다. fetch는 당장 뭔가가 일어나진 않고 시간이 조금 걸린 뒤에 일어난다.(약속된 사항) */ 
    .then(response => response.json())
    .then(data => {
    const weather = document.querySelector("#weather span:first-child"); /* html 첫 번째 span에서 날씨를 줄 것 */
    const city = document.querySelector("#weather span:last-child"); 
    city.innerText = data.name; /* 두 번째 span에는 지역과 온도 */
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }); /* 날씨 슬래시 온도 지역 (순서) */ /* 중간에 weather[0]은 Network 부분을 보니 weather의 array는 하나밖에 존재하지 않아서(그 안에는 다 object 형식이었고) [0]으로 표기한 것 같다! 꼭 [0]을 해주어야 한다. 없이 코딩하면 오류가 난다.(undefined)*/ 
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);