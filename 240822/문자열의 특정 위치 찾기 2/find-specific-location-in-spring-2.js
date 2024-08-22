// 변수 선언 및 입력
const fs = require("fs");

// 영문자를 입력받습니다.
let a = fs.readFileSync(0).toString().trim();

// 문자열 리스트를 정의합니다.
let string = ["apple", "banana", "grape", "blueberry", "orange"]

// 조건을 만족하는 문자열을 출력하고 조건을 만족하는 문자열의 개수를 셉니다.
let cnt = 0;
for (let i = 0; i < 5; i++) {
    if (string[i][2] === a || string[i][3] === a) {
        console.log(string[i]);
        cnt++;
    }
}

// 조건을 만족하는 문자열의 개수를 출력합니다.
console.log(cnt);