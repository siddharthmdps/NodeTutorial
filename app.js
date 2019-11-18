// console.log("Hello from node.js");

// const tutorial = require('./tutorial');

// console.log("Content inside tutorial: ", tutorial);

// console.log("1 + 1 = ", tutorial.sum(1, 1));
// console.log("PI = ", tutorial.PI);
// console.log("Object = ", new tutorial.SomeMathObject);

//Event Module

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log("Tutorial Event has occured", num1+num2);
// })

// eventEmitter.emit('tutorial', 1, 3);

// class Person extends EventEmitter {
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }

// }


// let pedro = new Person ('Pedro');
// let Christina = new Person ('Christina');
// pedro.on('name', () => {
//     console.log('My name is: ' + pedro.name);
// });
// Christina.on('name', () => {
//     console.log('My name is: ' + Christina.name);
// });

// pedro.emit('name');
// Christina.emit('name');


// const readline = require('readline');

// const rl = readline.createInterface({input: process.stdin, 
//                         output: process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;

// rl.question(`${num1} + ${num2}? `, (userInput) => {
//     console.log("Your Answer: ", userInput);
//     if(userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect Response, Please Try again\n');
//         rl.prompt();
//         rl.on('line',  (userInput) => {
//             if(userInput.trim() == answer){
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`Your ans of ${userInput} is incorrect. Try again\n`);
//                 rl.prompt();
//             }
//         })
//     }
// });

// rl.on('close', () => {
//     console.log("Correct Answer!");
// });

//File 

// const fs = require('fs');

// fs.writeFile('Example.txt', "This is an example to Write in a file", err => {
//     if(err)
//         console.log(err);
//     else{
//         console.log('File Successfully created!');
//         fs.readFile('Example.txt', 'utf8' ,(error, file) => {
//             if(error)
//                 console.log(error);
//             else
//                 console.log(file);
//         });
//     }
// });

// fs.rename('Example.txt', 'Example2.txt', err => {
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file');
// })

// fs.appendFile('Example2.txt', 'Some data to append', err =>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Data appended");
// });

// fs.unlink('Example2.txt', err =>{
//     if(err)
//         console.log(err);
//     else
//         console.log("File deleted!");
// })

const fs = require('fs');

// fs.mkdir('tutorial', err => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Folder Created!");
// })

// fs.rmdir('tutorial', err => {
//     if(err)
//         console.log(err);
//     else
//         console.log("Folder removed!");
// })

// fs.mkdir('tutorial', err => {
//     if(err)
//         console.log(err);
//     else
//         fs.writeFile('./tutorial/example.txt', '123 data created!' ,err => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log("File created");
//         })
// })

// fs.unlink('./tutorial/example.txt', err =>{
//     if(err)
//         console.log(err);
//     else{
//         console.log("File deleted!");
//         fs.rmdir('tutorial', err => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log("Folder removed!");
//         })
//     }
// })

// fs.readdir('example', (err, files) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log(files);
//         for(let file of files){
//             fs.unlink('./example/' + file, err => {
//                 if(err)
//                     console.log(err);
//                 else{
//                     console.log('successfully deleted files');
//                 }
//             })
//         }
//     }
// });

// fs.rmdir('example', err => {
//     if(err)
//         console.log(err)
//     else
//         console.log('Folder deleted')
// });

// const zlib = require('zlib');

// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();

// const readStream = fs.createReadStream('example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.gz');

// // readStream.on('data', (chunk) => {
// //     console.log(chunk);
// //     writeStream.write(chunk);
// // });

// readStream.pipe(gzip).pipe(writeStream);

