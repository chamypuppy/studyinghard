//console.log를 이용한 calculator function
// const consoleCalculator = {
//   plus:function(a, b){
//     console.log(a + b);
//   },
// };

// consoleCalculator.plus(2, 3);




// console.log 없이 return으로 calculator function 반환값 결과 얻기 = return된 반환값을 내 맘대로 사용가능, 상호 의존적)
const calculator = {
  plus: function (a, b) {
    return a + b ;
  },
  minus:function(a, b){
    return a - b ;
  },
  times:function(a, b) {
    return a * b ;
  },
  divide:function(a, b){
    return a / b ;
  },
  power:function(a, b){
    return a ** b ;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(minusResult, 10);
const divideResult = calculator.divide(plusResult, minusResult);
const powerResult = calculator.power(timesResult, divideResult)


//return으로 반환값을 얻은 후에 외부에서 console 값 실행
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);