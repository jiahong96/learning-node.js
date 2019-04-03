const fs = require('fs');

// create folder
fs.mkdir('tutorial', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('folder created');
    }
})

//delete folder (which is empty)
// fs.rmdir('tutorial', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('folder deleted');
//     }
// })

// create folder with file
// fs.mkdir('tutorial-with-file', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./tutorial-with-file/example.txt', 'this is an example', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('file created');
//             }
//         })
//         console.log('folder created');
//     }
// })

// delete file first then folder 
// fs.unlink('./tutorial-with-file/example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.rmdir('tutorial-with-file', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('folder deleted');
//             }
//         })
//     }
// })

// fs.readdir('tutorial-with-file', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// })