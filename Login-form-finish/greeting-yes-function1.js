const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//☆중요하지 않은 정보(ex. string만 포함된)를 변수로 표기할 땐 => 대문자 변수를 사용한다★ */
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}


function paintGreetings(username){
  greeting.innerText = `Hello ${username}`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}