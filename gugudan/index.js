    /*const로 변수에 값을 저장하기 = 값 가져오기(대입)*/



    /*버튼 가져오기(샵 클릭까지) // 버튼을 클릭하기.addEventListener부터 끝까지*/
document.querySelector('#click').addEventListener('click', () => {
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value

    if (a) {
        if (b) {
            /* 꼭 저장을 위에 할 필요 없음! 바로 위에 해도 OK!!*/
            const c = a * b
            const r = document.querySelector('#result')
            r.textContent = c
        } else {
            const r = document.querySelector('#result')
            r.textContent = '두 번째 값 입력해'
        }

    } else {
        const r = document.querySelector('#result')
        r.textContent = '첫 번째 값 입력해'
    }
});

