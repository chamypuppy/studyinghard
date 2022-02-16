// // const loginForm = document.querySelector("#login-form"); 밑에랑 같은 말
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input"); /* 이제 document에서 찾지 않고 위에 const loginForm안에서 바로 찾을 수 있다! 밑에도 마찬가지! */
// const loginButton = loginForm.querySelector("button");


//위에 세 줄 코드를 두 줄로 작성하는 방법
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");



function onLoginBtnClick(){
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);