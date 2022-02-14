/* h1태그를 js로 가져오는 법 */
const today = document.querySelector(".monday h1");
console.log(today); 

// js로 html 텍스트 변경하기
today.innerText = "이번주도 힘내자!!";

// 여러 개의 h1를 js로 가져오는 법
const week = document.querySelectorAll(".monday h1");
console.log(week);