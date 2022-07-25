const n1 = document.getElementById('n1') as HTMLInputElement
const n2 = document.getElementById('n2') as HTMLInputElement
const button = document.getElementById('calcular') as HTMLElement
const result = document.getElementById('res') as HTMLElement

function calcular (n1: number, n2: number) {
  return n1 + n2
}

button.addEventListener('click', function () {
  result.innerHTML = calcular(Number(n1.value), Number(n2.value)).toString()
})