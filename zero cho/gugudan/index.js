    /*const로 변수에 값을 저장하기 = 값 가져오기(대입)*/

    /*결과값은 html에 기재가 되어 있었기 때문에 여기에 삽입이 된다! const a나 b는 이미 실행된 거라 <<새로고침한 경우>? 값이 없기 때문에 불가-> 클릭을 했을 때 값을 가져와야 함!*/
    const r = document.querySelector('#result')

    /*버튼 가져오기(샵 클릭까지) // 버튼을 클릭하기.addEventListener부터 끝까지*/
document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value
    if (a) {
        if (b) {
            /* 꼭 저장을 위에 할 필요 없음! 바로 위에 해도 OK!!*/
            const c = a * b
            
            r.textContent = c
        } else {
            r.textContent = '두 번째 값 입력해'
        }

    } else {
        r.textContent = '첫 번째 값 입력해'
    }
});

