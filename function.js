// 디저트로 function 연습
function dessert(dessertName, age) {
  console.log("Hello my name is " + dessertName + " and I'm " + age) 
}


dessert("pudding", 10);
dessert("cake", 5);
dessert("HomeRunBall", 2);


// 계산기로 function 연습 (1)
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

plus(80, 6);


// 계산기로 function 연습 (2)
function divide(a, b) {
  console.log(a / b)
}

divide(20, 2);


// object와 function을 합쳐서! 심화

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
     console.log("Hello " + otherPersonsName + " Nice to meet you!")
  },
};

player.sayHello('lynn');
player.sayHello('nico');

