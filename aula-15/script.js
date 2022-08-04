var pessoa = {
    name: 'Leehaney',
    age: 25,
    phones: [1199945454, 1193245653],
    falar: function (text) { return "Ol\u00E1, estou falando: ".concat(text); },
    calcular: function (n1, operator, n2) { return eval("".concat(n1).concat(operator).concat(n2)); }
};
console.log(pessoa.calcular(5, '*', 5));