const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let c = parseInt(a / b)
let d = a % b

console.log(`${c}...${d}`)