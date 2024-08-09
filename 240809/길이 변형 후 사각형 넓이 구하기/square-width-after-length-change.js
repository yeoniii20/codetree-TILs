const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

// 가로 길이
let a = Number(input[0]);
// 세로 길이
let b = Number(input[1]);

a += 8
b *= 3

console.log(a)
console.log(b)
console.log(a * b)