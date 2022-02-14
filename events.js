//click event
const today = document.querySelector(".monday h1");

function handleTodayClick(){
  console.log("Today was clicked!");
  today.style.color = "blue";
};

function handleMouseEnter(){
  today.innerText = "Mouse is here!";
};

function handleMouseLeave(){
  today.innerText = "Mouse is gone!";
};

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
  alert("copier!");
}

function handleWindowOffline(){
  alert("SOS no WIFI");
}

function handleWindowOnline(){
  alert("ALL GOOOD");
}

today.addEventListener("click", handleTodayClick);
today.addEventListener("mouseenter", handleMouseEnter);
today.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// event를 사용하는 방법 (1),(2)
// (1) 위의 코드와 같이
// today.addEventListener("click", handleTodayClick); 라 작성한다.
// niko 쌤은 (1)을 선호 => 나중에 .removeEventListener 로 event를 제거할 수 있기 때문이다.

// (2) 
// today.onclick = handleTodayClick; 라 작성한다.