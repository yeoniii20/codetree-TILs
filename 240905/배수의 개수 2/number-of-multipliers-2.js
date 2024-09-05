const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];
let count = 0;


rl.on('line', (input) => {
    numbers.push(parseInt(input));  // 입력받은 값을 숫자로 변환해서 배열에 저장

    if (numbers.length === 10) {    // 10개의 숫자를 입력받으면
        let oddCount = countOddNumbers(numbers);
        console.log(oddCount);
        rl.close();
    }
});

function countOddNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {  // 홀수인 경우
            count++;
        }
    }
    return count;
}