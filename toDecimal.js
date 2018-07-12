// Created by Sergio Gare at 11/07/2018.

const math = require('./math');

module.exports = (digits, base) => {

    let result = 0;
    let exponent = result;
    let length = digits.length - 1;

    for (let i = length; i >= 0; i--) {

        result += digits.charCodeAt(i) * math.pow(base, exponent);
        exponent++;

    }

    return result;

};