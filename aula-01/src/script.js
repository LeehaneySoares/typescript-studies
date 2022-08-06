"use strict";
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const button = document.getElementById('calcular');
const result = document.getElementById('res');
function calcular(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    result.innerHTML = calcular(Number(n1.value), Number(n2.value)).toString();
});
