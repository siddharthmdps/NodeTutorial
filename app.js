// console.log("Hello from node.js");

// const tutorial = require('./tutorial');

// console.log("Content inside tutorial: ", tutorial);

// console.log("1 + 1 = ", tutorial.sum(1, 1));
// console.log("PI = ", tutorial.PI);
// console.log("Object = ", new tutorial.SomeMathObject);

//Event Module

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log("Tutorial Event has occured", num1+num2);
})

eventEmitter.emit('tutorial', 1, 3);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }

}


let pedro = new Person ('Pedro');
let Christina = new Person ('Christina');
pedro.on('name', () => {
    console.log('My name is: ' + pedro.name);
});
Christina.on('name', () => {
    console.log('My name is: ' + Christina.name);
});

pedro.emit('name');
Christina.emit('name');


const readline = require('readline');

const rl = readline.createInterface({input: process.stdin, 
                        output: process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`${num1} + ${num2}? `, (userInput) => {
    console.log("Your Answer: ", userInput);
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect Response, Please Try again\n');
        rl.prompt();
        rl.on('line',  (userInput) => {
            if(userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Your ans of ${userInput} is incorrect. Try again\n`);
                rl.prompt();
            }
        })
    }
});

rl.on('close', () => {
    console.log("Correct Answer!");
});



