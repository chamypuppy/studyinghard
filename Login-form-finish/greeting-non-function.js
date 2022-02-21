const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
/* 일반적으로 string만 포함된 변수는 대문자로 표기한다! 
loginForm이나 loginInput처럼 중요한 정보를 담은 게 아닐 때 = 변수를 대문자로 작성
☆즉, 중요하지 않은 정보를 변수로 표기할 땐 => 대문자 변수를 사용한다★ */
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); /* user의 이름(ID)는 변수로 저장 */ /* 이때 form이 사라짐 */
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = "Hello " + username; /* 사라진 form자리에 Hello + 변수 text생김 */
  greeting.innerText = `Hello ${username}`; /* 사라진 form자리에 Hello + 변수 text생김 */
  greeting.classList.remove(HIDDEN_CLASSNAME); /* greeting에 있었던 class = "hidden"을 사라지게(remove) 함 */
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `Hello ${savedUsername}`; /* 먼저 greeting에 텍스트를 추가해주고 */
  greeting.classList.remove(HIDDEN_CLASSNAME);//show the greetings, 그 후에 greeting에서 class = hidden을 삭제해줄거야 
}


// 그런데 작은 오류가 있다!! 17, 18줄과 29, 30줄은 같은 내용을 반복하고 있다.
// 똑같은 코드의 반복을 function으로 제거하는 것은 greeting-yes-function.js에서 확인