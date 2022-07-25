const n1 = document.getElementById('n1') as HTMLInputElement
const n2 = document.getElementById('n2') as HTMLInputElement
const button = document.getElementById('calcular')
const result = document.getElementById('res')

function calcular (n1, n2) {
  return n1 + n2
}

button.addEventListener('click', function () {
  result.innerHTML = calcular(n1.value, n2.value)
})