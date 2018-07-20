// Created by Sergio Gare at 17/07/2018.

const decimalToBase128 = require('./conversor').decimalToBase128;

module.exports = decompress;

function decompress (numberString) {

    let final = [];
    let len = numberString.length;

    for (let i = 0; i < len; i++)

        final.push(decimalToBase128(numberString.charCodeAt(i)));

    return final.join('');

}