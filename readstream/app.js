const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('./example2.txt', 'utf-8');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})

//readStream.pipe(writeStream); //short hand version of ^

// large file should use stream
// stream read chunk by chunk
// smaller buffer size
// memory efficient
