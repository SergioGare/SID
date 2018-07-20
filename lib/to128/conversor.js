// Created by Sergio Gare at 16/07/2018.

module.exports = {
    base128ToDecimal: base128ToDecimal,
    decimalToBase128: decimalToBase128
};

function base128ToDecimal (string) {

    let result = 0;
    let final = [];
    let exponent = result;
    let length = string.length - 1;
    let exponents = [0, 7];

    for (let i = length; i >= 0; i--, exponent++) {

        exponent = exponent > 1 ? 0 : exponent;

        result += string.charCodeAt(i) << exponents[exponent];

        if (exponent === 1 | i === 0) {

            final.push(String.fromCharCode(result));

            result = 0;

        }

    }

    return final.join('');

}

function decimalToBase128 (number) {

    if (number < 128)

        return String.fromCharCode(number);

    let final = [];

    while (true) {

        if(number >> 7) {

            final.unshift(String.fromCharCode(number & 127));
            number >>= 7;

        } else {

            final.unshift(String.fromCharCode(number & 127));
            break;

        }

    }

    return final.join('').padStart(2, '0')

}