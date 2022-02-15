const today = document.querySelector(".monday h1");

function handleTodayClick() {
  const clickedClass = "clicked fontfont"
  if (today.className === clickedClass) {
    today.className = "";
  } else { 
    today.className = clickedClass;
  }
}

today.addEventListener("click", handleTodayClick);