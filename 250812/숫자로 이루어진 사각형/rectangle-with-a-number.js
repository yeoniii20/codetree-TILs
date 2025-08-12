const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

let arr = []
let chd = 0

function printNumber(n) {
    for(let i = 1; i <= n; i++) {
        let row = []
        for (let j = 1; j <= n; j++) {
            chd++
            if(chd === 10) chd = 1
            row.push(chd)
        }
        // console.log(row)
        console.log(row.join(" "))
    }
}

printNumber(N)