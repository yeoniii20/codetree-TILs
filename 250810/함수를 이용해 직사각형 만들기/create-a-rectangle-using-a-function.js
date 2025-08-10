const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

function printSquare(n, m) {
    for (let i = 1; i <= n; i++){
        let str = ""
        for (let j = 1; j <= m; j++){
            str += "1"
        }
        console.log(str)
    }
}

printSquare(n, m)