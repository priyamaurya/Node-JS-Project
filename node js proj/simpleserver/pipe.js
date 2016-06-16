var fs = require('fs');
var readable = fs.createReadStream('input.text');
var writeStream = fs.createWriteStream('out.text');

readable.pipe(writeStream);