// Created by Sergio Gare at 16/07/2018.

// De base 16 a 65536.

module.exports = compressor;

function compressor (numberString) {

    let final = [];
    let len = numberString.length;

    for (let i = 0; i < len; i+=4)

        final.unshift(String.fromCharCode(parseInt(numberString.substr(i, 4), 16)));

    return final.join('');

}