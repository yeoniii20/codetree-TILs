const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

let minNum = 0
let arr = []

function minNumber(n, m) {
    for(let i = 1; i <=n; i++){
        if (n % i === 0 && m % i === 0) {
        arr.push(i)

        // console.log(i)
        }
    }
    minNum = Math.max(...arr)

    const min1 = n / minNum
    const min2 = m / minNum

    // console.log(min1)
    // console.log(min2)
    // console.log(minNum)
    console.log(min1 * min2 * minNum)

}

minNumber(n, m)

// 먼저 최소 공배수를 구한 다음, 
// 최소 공배수로 각각의 수를 나눈 몫을 곱함