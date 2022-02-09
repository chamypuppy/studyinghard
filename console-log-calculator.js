// 숙제 : 함수로 아래의 계산기 만들기
// a+b
// a-b
// a/b
// a*b

const calculator = {
  add:function(a, b) {
    console.log(a + b);
  },
  minus:function(a, b) {
    console.log(a - b);
  },
  divide:function(a, b) {
    console.log(a / b);
  },

  Multiplication:function(a, b) { 
    console.log(a * b);
  },
  power:function(a, b) {
    console.log(a ** b);
  },
};

calculator.add(5, 5);
calculator.minus(2, 1);
calculator.divide(10, 5);
calculator.Multiplication(8, 5);
calculator.power(2, 3);
