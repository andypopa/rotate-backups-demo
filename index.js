const fs = require('fs');

let d = new Date();
let targetYear = 2019;

const oneHourInMs = 60 * 60 * 1000;
const oneDayInMs = 60 * 60 * 1000 * 24;

let i = 0;

while (targetYear < d.getFullYear()) {
    d = new Date(d.getTime() - oneDayInMs);
    fs.writeFile(`./data/${d.toISOString().replace(/:/g, '_')}`, '', () => {});
    i++;
}

console.log(`wrote ${i} files. last date: ${d.toISOString()}`);
