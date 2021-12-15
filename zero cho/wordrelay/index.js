const btn = document.querySelector('#button')
// document.querySelector(아이디)는 그 아이디의 태그(칸이라고나 할까)를 가져온다
btn.addEventListener('click', () => {
    /*값을 가져올 때는 textContent (ex. div span button ...) */
    const wordTag = document.querySelector('#word')
    const word = wordTag.textContent
    //.은 ~의를 의미한다
    const inputTag = document.querySelector('#input')
    const input = inputTag.value
    const lastIndex = word.length - 1
    const w = word[lastIndex] //끝말잇기의 끝 글자 (라스트 인덱스=마지막 글자)
    const i = input[0]; //첫글자는 0 (이라는 문장) 말 잇기 시작하는 첫글자
    if (w===i) {
        wordTag.textContent = input
        document.querySelector('#error').textContent = ''
        inputTag.value = ''
        inputTag.focus()
    } else {
        document.querySelector('#error').textContent = '땡'
        inputTag.value = ''
        inputTag.focus()

    }
})

// 'abcdefg'[0] // 'a' 라는 문자열
// input은 value, 나머지는 textContent