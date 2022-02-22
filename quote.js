const quotes = [
  {
    quote: "내일은 내일의 태양이 뜬다.",
    author: "바람과 함께 사라지다 中",
  },
  {
    quote: "어제보다 더 나은 오늘",
    author: "나의 좌우명",
  },
  {
    quote: "내일로 미루지말고 지금 해보자",
    author: "나",
  },
  {
    quote: "승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.",
    author: "크리스티 메튜슨",
  },
  {
    quote: "한 번 실패한 것이, 앞으로의 모든 일에 실패할 거라는 것을 의미하지는 않는다.",
    author: "마릴린 먼로",
  },
  {
    quote: "패배는 최악의 실패가 아니다. 시도를 하지 않는 것이 진짜 실패다.",
    author: "조지 우드베리",
  },
  {
    quote: "지난 실수를 잊어라.실패도 잊어라.자신이 할 것을 빼놓고 전부 잊어라.그리고 그 할 것을 실행하라.",
    author: "윌리엄 듀런트",
  },
  {
    quote: "기회는 준비된 자만이 잡을 수 있다.",
    author: "unknown",
  },
  {
    quote: "실패했던 경험이 나를 더 단단하게 만들어 줄 것이다.",
    author: "나",
  },
  {
    quote: "시간도 금이다.",
    author: "나",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//todaysQuotesms quote와 author을 같이 가지고 있어!

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;