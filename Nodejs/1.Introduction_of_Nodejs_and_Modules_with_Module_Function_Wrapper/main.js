const fs = require("node:fs");

const data = fs.readFileSync("./notes.md", "utf-8");

console.log(data);

(function (exports, require, module, __filename, __dirname) {
  const fs = require("node:fs");

  const data = fs.readFileSync("./notes.md", "utf-8");

  console.log(data);
});

// console.log("Hello world");

// alert("Hello this is suraj")

// console.log(window) this will not work in nodejs

// globalthis, Global, Window

// console.log(global);
