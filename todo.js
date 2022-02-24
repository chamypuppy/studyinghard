const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span); /* li 안에 span 태그 삽입 */
  li.appendChild(button); 
  toDoList.appendChild(li);
}


function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 입력한 value를 새로운 newTodo라는 변수에 복사(저장)
  toDoInput.value = ""; /* 그 다음에 우리가 이렇게 값을 empty해도 newTodo변수와는 관련이 없다 */
  paintToDo(newTodo);
}


toDoForm.addEventListener("submit", handleToDoSubmit)