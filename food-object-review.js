const food = {
  favorite: 'hobbang',
  ate: 'kimbbap',              /* 꼭 '' 써주기 */
  wantEat: 'cake',
  areYouHungry: true,
  whayDay: 10,
};

console.log(food);
console.log(food.favorite);        /* 호빵 */
console.log(food['favorite']);    /* 호빵 */

food.areYouHungry = false;      /* object의 index 변경 */

// 변경된 false 확인
console.log(food);
console.log(food.areYouHungry);
console.log(food['areYouHungry']);

food.loveEat = 'crepe';          /* 꼭 '' 써주기 */
console.log(food);
