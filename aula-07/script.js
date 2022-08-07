"use strict";
let idade = 90;
let idade2 = '90';
function mostraIdade(idade) {
    typeof idade === 'number'
        ? console.log(idade)
        : console.log(idade.toLocaleUpperCase);
}
mostraIdade(idade);
mostraIdade(idade2);
