const fs = require('fs');
const fileName = 'example.txt';
const fileName2 = 'example2.txt';

// create file
fs.writeFile(fileName, 'this is an example', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`${ fileName } created`)
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        })
    }
})

// rename file
// fs.rename(fileName, fileName2, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully renamed the file');
//     }
// })

// append data to file
// fs.appendFile(fileName2, 'Some data being appended', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully appended data to the file');
//     }
// })

// delete file
// fs.unlink(fileName2, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully deleted the file');
//     }
// })