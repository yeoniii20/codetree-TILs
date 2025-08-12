const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

// for문을 돌리는데 두 수 모두 나머지가 0이 되는 가장 큰 수

let maxNum = 0
let arr = []

function maxNumber(n, m) {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && m % i === 0) {
            arr.push(i)
        }
    }
           // console.log(arr) 
           maxNum = Math.max(...arr)
           console.log(maxNum)
}

maxNumber(n, m)