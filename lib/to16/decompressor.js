// Created by Sergio Gare at 16/07/2018.

// De base 65536 a 16.

module.exports = decompres;

function decompres (numberString) {

    let final = [];

    for (let i = numberString.length - 1; i >= 0; i--)

        final.unshift(numberString.charCodeAt(i).toString(16).padStart(4, '0'));

    return final.join('');

}