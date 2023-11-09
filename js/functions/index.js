/*
    Void Function
    Params Function
    Return Function
    Arrow Function
*/

function helloWorld() {
    console.log('Hello World!')
}

// Void Function:
function increment() {
    number += 1
}

// Params Function and Return Function:
function sum(x , y) {
    const total = x + y;
    return total;
}

// Arrow Function
myName = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}!!!`)
}

let number = 1;

increment();
increment();

helloWorld();

const num1 = 2;
const num2 = 6;
const soma = sum(num1, num2);
console.log(soma)

myName('Guilherme', 'Gama')




