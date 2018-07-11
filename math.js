// Created by Sergio Gare at 11/07/2018.

module.exports.pow = (base, exp) => {

    let result = 1;

    while (true) {

        if (exp & 1)
            result *= base;

        exp >>= 1;

        if (!exp)
            break;

        base *= base;

    }

    return result;

};