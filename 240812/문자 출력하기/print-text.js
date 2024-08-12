const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();
let n = input;

// 출력
let result = "";
for (let i = 0; i < 8; i++) {
    result += n;
}
console.log(result);