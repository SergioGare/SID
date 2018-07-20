// Created by Sergio Gare at 16/07/2018.

// De base 100000 a 10.

module.exports = decompres;

function decompres (numberString) {

    let final = [];

    for (const symbol of numberString) {

        final.push(symbol.codePointAt(0).toString().padStart(5, '0'));

    }

    return final.join('');

}