// Created by Sergio Gare at 16/07/2018.

// De base 10 a 65536.

module.exports = decompressor;

function decompressor (numberString) {

    let final = [];

    for (let i = numberString.length - 1; i >= 0; i--)

        final.unshift(numberString.charCodeAt(i).toString().padStart(4, '0'));

    return final.join('');

}