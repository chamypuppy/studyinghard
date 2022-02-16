const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event){
  event.preventDefault(); /* 첫번째 argument에서 받은 정보(object)에 preventDefault 함수를 넣어서 submit(새로고침)이 안되도록 역할하네! */
  console.log(loginInput.value); /* 이제는 버튼을 클릭해도 새로고침이 되지 않아! */
    
}


loginForm.addEventListener("submit", onLoginSubmit);