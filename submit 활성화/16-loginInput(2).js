const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


// if (1)user가 name을 입력했는지 확인/ (2)user의 name이 15글자 초과하진 않는지 확인

// 늘 = 와 ===의 쓰임새에 대해서 생각하면서 작성해보자! = 은 오른쪽 값을 왼쪽에 대입, ===은 좌항과 우항이 같은지 확인

function onLoginBtnClick(){
  const username = loginInput.value; 
  if(username === "")/* value 값이 없을 경우 */ {
    alert("Please write your name");
  } else if(username.length > 15) {
    alert("Your name is too long.");
  } else {
    console.log(username);
  }
      
}

loginButton.addEventListener("click", onLoginBtnClick);