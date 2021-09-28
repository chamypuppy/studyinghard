/*버튼을 클릭할 때~ */
document.querySelector('#click').addEventListener('click', () => {
    /*값 불러오기 + const로 변수에 값을 저장하기*/
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value
    if (a) {
        if (b) {
            a * b /*밑에 줄은 곱한 값을 표시 그래서 result */
            document.querySelector('#result').textContent = a * b
        } else {
            document.querySelector('#result').textContent = '두 번째 값 입력해'
        }

    } else {
        document.querySelector('#result').textContent = '첫 번째 값 입력해'
    }
});

