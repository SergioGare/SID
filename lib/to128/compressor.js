// Created by Sergio Gare at 16/07/2018.

const base128ToDecimal = require('./conversor').base128ToDecimal;

module.exports = compress;

function compress (numberString) {

    let final = [];
    let len = numberString.length;

    for (let i = 0; i < len; i+=2)

        final.push(base128ToDecimal(numberString.substr(i, 2)));

    return final.join('');

}