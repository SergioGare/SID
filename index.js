// Created by Sergio Gare at 11/07/2018.

const to256 = require('./inverse');
const toDecimal = require('./toDecimal');

console.log(toDecimal('222', 128));
console.log(String.fromCharCode(50));

to256(6450);

/*const stdin = process.openStdin();

stdin.addListener('data', (data) => {

    digits = data.toString().trim();

    console.log(toDecimal(digits));

});*/
