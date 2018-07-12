function Inverse(number, base) {

    caracteres = new Array(1);

    for(var i=0 ; i<2 ; i++){

        if(number%base){
            caracteres[i] = (number%base);
            number-=((caracteres[i]*base));
        }else {
            caracteres[i] = number;
        }

    }

    console.log(caracteres);

}
