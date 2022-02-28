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
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); /* 내 생각에 여기 toDo는 함수를 만들지 않은 대신에 생긴 argument가 아닐까 생각해본다 */ /* toDo의 id와 위에 선언한 li의 id가 같지 않다 -> 라는 조건. 이것이 true면 array에 남고, false면 array에서 item이 제외된다. 여기서 li.id는 string type, toDo.id는 number type 이다..!! 그래서 parseInt를 추가함.*/ /* 니코쌤 설명 : 여기 (toDo)는 toDos DB(정확히는 아니지만)에 있는 요소 중 하나.*/ /* 우리가 클릭(x자 클릭)한 li.id와 다른(!==) toDo는 남기고 싶어. */
  saveToDos(); /* 윗 문장에서 toDos DB에서 todo를 지우니까, 그 후에 saveToDos()를 꼭 불러서 다시 localStorage에 내용을 넣는 거 잊지 마!! 로컬에 저장된 array item에 대해 지워진 item에 대한 이야기가 반영이 되어야 하기 때뭉.*/
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


// function sexyFilter(){

// }

// [1,2,3,4].filter(sexyFilter)

// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) = 3
// sexyFilter(4) = 4
// sexyFilter(5) = 5