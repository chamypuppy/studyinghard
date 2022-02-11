//노마드코더 - 음주가 가능한 계산기 
//isNaN이 true거나 음수일 경우 (양수 숫자를 적어주세요)
//age>=18 && age=<50 (음주O), age<18 음주X
//age > 50 && age=< 80 (건강 챙기는 문구 장려), age > 80 (음주는 선택사항 문구)

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive Number.");
} else if (age < 18) {
  console.log("You are too young.")
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}



//else는 선택사항이다.
//else if 를 붙이면 조건을 하나 더 늘릴 수 있다.