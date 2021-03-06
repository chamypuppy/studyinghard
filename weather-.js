function onGeoOk(position){ /* position 인자가 js가 주는 GeolocationPosition object 정보를 받아오는 인자.*/
  const lat = position.coords.latitude; /* 위도 */
  const lng = position.coords.longitude; /* 경도 */
  console.log("You live in", lat, lng);
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);