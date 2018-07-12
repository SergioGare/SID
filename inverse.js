function Inverse(number) {

    caracteres = new Array(1);

    for(var i=0 ; i<2 ; i++){

        if(number%128){
            caracteres[i] = (number%128);
            number-=((caracteres[i]*128));
        }else {
            caracteres[i] = number;
        }

    }

    console.log(caracteres);

}

Inverse(255);