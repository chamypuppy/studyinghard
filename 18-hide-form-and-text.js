const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
/* 일반적으로 string만 포함된 변수는 대문자로 표기한다! 
loginForm이나 loginInput처럼 중요한 정보를 담은 게 아닐 때 = 변수를 대문자로 작성
☆즉, 중요하지 않은 정보를 변수로 표기할 땐 => 대문자 변수를 사용한다★ */


function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); /* user의 이름(ID)는 변수로 저장 */ /* 이때 form이 사라짐 */
  console.log(username); /* form은 사라지지만 값은 console에 저장됨 */
  greeting.innerText = "Hello " + username; /* 사라진 form자리에 Hello + 변수 text생김 */
  greeting.innerText = `Hello ${username}`; /* 사라진 form자리에 Hello + 변수 text생김 */
  greeting.classList.remove(HIDDEN_CLASSNAME); /* greeting에 있었던 class = "hidden"을 사라지게(remove) 함 */
}



loginForm.addEventListener("submit", onLoginSubmit);


/* 다음 코드에서는 이름을 입력 후에
새로고침을 하고 나서도 form을 보지 않고 이미 적었던 이름이 저장되어 있도록 하기 */