const fs = require('fs');

let d = new Date();
let targetYear = 2010;

const oneHourInMs = 60 * 60 * 1000;

let i = 0;

while (targetYear < d.getFullYear()) {
    d = new Date(d.getTime() - oneHourInMs);
    fs.writeFile(`./data/${d.toISOString()}`, '', () => {});
    i++;
}

console.log(`wrote ${i} files. last date: ${d.toISOString()}`);
