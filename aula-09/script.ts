/**
 * Types assertions: é uma forma de ajudarmos o typescript a identifica os types de variáveis
 * em outra palavras, ele não precisa ficar tentando descobrir, podemos utilizar a palavra reservada
 * "as" para definir um type, por exemplo:
 */

const nome: string = 'Leehaney'
const letters: number = (nome as string).length

const inputIdade = document.querySelector('.idade') as HTMLInputElement

console.log(inputIdade.value)