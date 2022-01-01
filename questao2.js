// Escrever um programa que imprima a classificação criança, adolescente, adulto ou idoso, conforme a idade correspondente.

let idade = 20;

if (idade < 12){
    console.log('Criança');
}

else if (idade >= 12 && idade < 18){
    console.log('Adolescente');
}

else if (idade >= 18 && idade < 60){
    console.log('Adulto');
}

else{
    console.log('Idoso');
}