"use strict";
const pessoa = {
    name: 'Leehaney',
    age: 25,
    phones: [1199945454, 1193245653],
    falar: (text) => `Olá, estou falando: ${text}`,
    calcular: (n1, operator, n2) => eval(`${n1}${operator}${n2}`)
};
console.log(pessoa.calcular(2, '+', 2));
