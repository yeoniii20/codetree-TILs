const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const k = n

const m1 = new Map()


m1.set(3, 5)
m1.set(10000, 1)

// find 3
if(m1.has(3)) {
    console.log(m1.get(3))
} else {
    console.log("None")
}

// find 5
if(m1.has(5)) {
    console.log(m1.get(5))
} else {
    console.log("None")
}

// find 1000
if(m1.has(10000)) {
    console.log(m1.get(10000))
} else {
    console.log("None")
}

m1.set(3, 10)

// find 3
if(m1.has(3)) {
    console.log(m1.get(3))
} else {
    console.log("None")
}

m1.set(7, 15)

// ket가 k인 쌍 삭제
m1.delete(3)
m1.delete(7)

// find 7
if(m1.has(7)) {
    console.log("find", m1.get(7))
} else {
    console.log("None")
}


