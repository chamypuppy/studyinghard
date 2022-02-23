const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); /* js에서 html의 요소를 만들 때는 createElement() */

bgImage.src = `img/${chosenImage}`; /* 내 생각에 변수의 이름이 들어갈 때는 백틱 사용 */

document.body.appendChild(bgImage);