const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const map = new Map();
const out = [];

for (let i = 1; i <= n; i++) {
  const parts = input[i].trim().split(" ");
  const cmd = parts[0];

  if (cmd === "add") {
    const k = Number(parts[1]);
    const v = Number(parts[2]);
    map.set(k, v);               // key=k, value=v
  } else if (cmd === "find") {
    const k = Number(parts[1]);
    out.push(map.has(k) ? String(map.get(k)) : "None");
  } else if (cmd === "remove") {
    const k = Number(parts[1]);
    map.delete(k);
  }
}

console.log(out.join("\n"));
