// Created by Sergio Gare at 14/07/2018.

module.exports = {

    compress: compress16,
    decompress: decompress16

};

function compress16 (digits) {

    // De base 16 a base 65536.

    let result = 0;
    let final = [];
    let exponent = result;
    let length = digits.length - 1;
    let exponents = [0, 4, 8, 12];

    for (let i = length; i >= 0; i--, exponent++) {

        exponent = exponent > 3 ? 0 : exponent;

        result += parseInt(digits[i], 16) << exponents[exponent];

        if (exponent === 3 | i === 0) {

            final.unshift(String.fromCharCode(result));

            result = 0;

        }

    }

    return final.join('');

}

function decompress16 (digits) {

    // De base 65536 a 16.

    let final = [];
    let length = digits.length - 1;

    for (let i = length; i >= 0; i--)

        final.unshift(toHex(digits.charCodeAt(i)));

    return final.join('');

    function toHex (number) {

        if (number < 16)

            return number.toString(16).padStart(4, '0');

        let strFinal = [];

        while (true) {

            if(number >> 4) {

                strFinal.unshift((number & 15).toString(16));
                number >>= 4;

            } else {

                strFinal.unshift((number & 15).toString(16));
                break;

            }

        }

        return strFinal.join('').padStart(4, '0');

    }

}