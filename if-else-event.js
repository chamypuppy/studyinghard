// // if else event
// const today = document.querySelector(".monday h1");

// function handleTodayClick(){
//   if (today.style.color === "blue") {
//     today.style.color = "tomato";
//   } else {
//     today.style.color = "blue";
//   }
// };

// today.addEventListener("click", handleTodayClick);

//위 코드를 더 깔끔하게 바꿀 수도 있다! ↓ 반복되는 문장(today.style.color) 제거

const today = document.querySelector(".monday h1");

function handleTodayClick(){
    const currentColor = today.style.color;
    let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  today.style.color = newColor;
};

today.addEventListener("click", handleTodayClick);
