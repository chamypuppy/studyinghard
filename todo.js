const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){ /* 이 함수가 하는 단 한 가지 : toDos array의 내용을 localStorage에 넣는 것 */
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

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
  toDos.push(newTodo); /* user가 입력한 todolist인 newTodo를 빈 array인 toDos에 삽입 */
  paintToDo(newTodo); /* 화면에 그 ToDo를 보여준다. */
  saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
}


const savedToDos = localStorage.getItem(TODOS_KEY); /* localStorage에 todos 카테고리의 값을 가져온다 */
// console.log(savedToDos) /* 그냥 단순한 string */

if(savedToDos !== null){ /* 만약 savedToDos가 있다면 */
    const paresdToDos = JSON.parse(savedToDos)/* 그 가져온 값(savedToDos)이 살아있는 js object(또 다른 말로는 살아있는 array)로 변할거야 */
    // console.log(paresdToDos); /* 살아있는 js object이자 array */
    paresdToDos.forEach(sayHello); /* forEach는 각각의 item에 대해 sayHello를 실행시켜 */
}