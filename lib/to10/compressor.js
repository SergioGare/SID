// Created by Sergio Gare at 16/07/2018.

// De base 10 a 100000.

module.exports = compress;

function compress (numberString) {

    let final = [];
    let len = numberString.length;

    for (let i = len - 1; i >= 0; i -= 5)

        final.unshift(String.fromCodePoint(parseInt(numberString.substring(i - 4, i + 1))));

    return final.join('');

}