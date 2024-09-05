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
        let count3 = count3Numbers(numbers);
        let count5 = count5Numbers(numbers);
        console.log(count3, count5);
        rl.close();
    }
});

function count5Numbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 !== 0) {  // 5의 배수
            count++;
        }
    }
    return count;
}

function count3Numbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 !== 0) {  // 3의 배수
            count++;
        }
    }
    return count;
}