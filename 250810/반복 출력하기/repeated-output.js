const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function printString(n) {
    for (let i = 1; i <= n; i++) {
        console.log("12345^&*()_")
    }
}

printString(n)