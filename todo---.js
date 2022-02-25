const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){ /* 이 함수가 하는 단 한 가지 : toDos array의 내용을 localStorage에 넣는 것 */
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){/* 화면 상에서 to do 지우기. localStorage에서 지운 게 아님!!*/
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; /* 이제는 object의 text지 */
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
  const newTodoObj = {
      text:newTodo,
      id: Date.now(),
  }
  toDos.push(newTodoObj); /* user가 입력한 todolist인 newTodo를 빈 array인 toDos에 삽입 */
  paintToDo(newTodoObj); /* 화면에 그 ToDo를 보여준다. */
  saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); /* localStorage에 todos 카테고리의 값을 가져온다 */
// console.log(savedToDos) /* 그냥 단순한 string */

if(savedToDos !== null){ /* 만약 savedToDos가 있다면 */
    const parsedToDos = JSON.parse(savedToDos);/* 살아있는 js object(= 살아있는 array)*/
    toDos = parsedToDos; /* 살아있는 array를 빈 array에 넣어(대입) */
    parsedToDos.forEach(paintToDo); /* 이 줄에서는 아마 paintToDo({text: "a", id:{1212121}}) 이런 일이 일어났을 거야. */

}

