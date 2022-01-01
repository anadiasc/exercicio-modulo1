// Escreva um programa que imprime todos os números primos entre 1 e 100

function numPrimo(numMax){
    for(let num = 2; num <= numMax; num++){
        let primo = true;

        for(let divisor = 2; divisor < num; divisor++){
            if(num % divisor === 0){
                primo = false;
                break;
            }
        }

        if(primo) console.log(num);
    }
}

numPrimo(100);