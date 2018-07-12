
function Inverse(number, base) {

    let caracteres = [];

    while (true) {

        if((number / base) | 0) {

            caracteres.push(String.fromCharCode(number % base));
            number = (number / base) | 0;

        } else {

            caracteres.push(String.fromCharCode(number % base));
            break;

        }

    }

    console.log(caracteres.join(''));


}

Inverse(825650, 128);