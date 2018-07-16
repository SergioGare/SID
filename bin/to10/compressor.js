// Created by Sergio Gare at 16/07/2018.

// De base 65536 a 10.

module.exports = compress;

function compress (numberString) {

    let final = [];
    let len = numberString.length;

    for (let i = 0; i < len; i += 4)

        final.push(String.fromCharCode(parseInt(numberString.substr(i, 4))));

    return final.join('');

}