const dessert = {
  verySweet: 'pudding',
  favorite: 'cookies',
  wantEat: 'applePie',
  cakeLover: true,
  whatDay: 9,
};

// 모든 dessert의 Object를 가져온다
console.log(dessert);

// 밑에 두 문장은 같은 말
console.log(dessert.favorite);
console.log(dessert['favorite']); /* n번째 데이터를 array처럼 셀 수 없는 대신에 항목을 넣나보네 */

// index추가
dessert.ate = 'homeRunBall';

console.log(dessert);
/* console.log(dessert[5]); object는 n번째 데이터를 셀 수 없구나 */