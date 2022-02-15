// const day = document.querySelector(".tuesday h1");

// function dayClicked(){
//  if (day.className === "clicked") {
//    day.className = "";
//  } else {
//    day.className = "clicked";
//  }
// }

// day.addEventListener("click", dayClicked);


// //위 코드 정리(1)

const day = document.querySelector(".tuesday h1");

function dayClicked(){
  const classNameClicked = "clicked add-class" ;
 if (day.className === classNameClicked) {
   day.className = "";
 } else {
   day.className = classNameClicked;
 }
}

day.addEventListener("click", dayClicked);