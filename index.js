// Created by Sergio Gare at 11/07/2018.

const toDecimal = require('./toDecimal');

const stdin = process.openStdin();

stdin.addListener('data', (data) => {

    digits = data.toString().trim();

    console.log(toDecimal(digits));

});