const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; /* user가 작성한 input의 값은 이제 localStorage에 잘 저장이 되지만, 새로고침 후 user가 다시 input에 값을 치면 localStoarge에 저장된 value 값이 새로 저장이 돼서 기존에 저장한 값은 사라졌는데 const에서 let으로 바꾸면 user가 input에 입력한 값을 업데이팅이 가능하니까  */

function saveToDos(){ /* toDos Array의 item들을 localStorage에 저장하는 함수 */
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};



function deleteToDo(event){
  const li = event.target.parentElement; /* 같은 변수 li(paintToDo의 변수 li)를 써도 함수 실행 끝에는 이 변수가 사라지기 때문에, 이때는 이름이 같은 변수를 해도 괜찮다 */
  li.remove();
};



function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span")
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
  const button = document.createElement("button");
  button.innerText = "❌"
  li.append(button);
  button.addEventListener("click", deleteToDo);
};



function handleToDoSumit(event){
  event.preventDefault(); /* (1) submit 안되게 하기 */
  const newTodo = toDoInput.value; /* (2) user가 input에 입력한 값을 변수에 저장하기 */
  toDoInput.value = ""; /* (3)user 입력 값은 (2)에서 변수에 저장했으니 input에 입력되었던 값은 깨끗이 비우기 */
  toDos.push(newTodo);/* (4) user가 입력한 값(newTodo)을 Array에 전송하여 localStorage에 저장할 수 있게 돕기=> user화면에 list를 띄우기 전에(= paintToDo 함수의 역할) 먼저 toDos Array에 newTodo 값을 집어넣는다. */
  paintToDo(newTodo); /* push 먼저 해주고(윗 문장) (5) user 화면에 띄운다.(paintToDo) */
  saveToDos(); /* (6) saveToDos함수를 실행시킨다. */
};

toDoForm.addEventListener("submit", handleToDoSumit); /* toDoForm에 eventListener를 걸어야 한다. submit은 Input이 아니라 form의 기본 동작이기 때문인 것 같다. */

const savedToDos = localStorage.getItem(TODOS_KEY); /* 위에 saveToDos()함수 안에서 가져온 string으로 저장된 localStorage의 value의 key ( => string value  key*/

  console.log(savedToDos);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos); /* 살아있는 array이자 js object로 바꾼 이유는 array가 살아있으니까 그 안에 것들을 가져다 쓰기 위해서.(살아있을 때만 가져다 쓸 수 있기 때문인 것 같다) 그 안에 것들을 item이라 한다. */
  toDos = parsedToDos; /* 복원 역할로 넣은 문장인데 잘 이해가 안 간다ㅠ */ /* 살아있는 array(parsedToDos)를 빈 array(toDos)에 넣어(대입) */ /* toDos array를 가지고 와서(const parsedToDos = JSON.parse(savedToDos);) toDos array에 복원을 해주었어 */
  parsedToDos.forEach(paintToDo); /* 괄호 안에 들어간 function의 각각의 item에 대해서 각각 실행해줘. parsedToDos(localStorage에 저장된 value가 몇 개이냐에 따라 실행이 된다.*/ /* 여기에 paintToDo 함수를 넣은 이유는 우리가 지금 원하는 건 parsedToDos array내부의 item들을 가지고 그 item을 화면에 나타내게 하고 싶기 때문이야. 마침 우리가 화면에 item을 띄워줄 수 있게 돕는 paintToDo이 함수를 가지고 있기 때문에 바로 괄호 안에 넣은거야.*/
  
}