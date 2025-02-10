const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function printRect(n) {
    let num = 1; 

    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            str += num + " ";
            num++;

            if (num > 9) num = 1;
        }
        console.log(str.trim());
    }
}

printRect(n);
