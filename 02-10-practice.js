//object function 연습

const calculator = {
  plus:function(a, b){
   return  a + b;
  },
};


const plusResult = calculator.plus(5, 5); /* = return된 값 */

console.log(plusResult);


//2번의 변수를 선언한 function 
const age = 96;
  function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2 ;
  };


const krAge = calculatorKrAge(age);

console.log(krAge);