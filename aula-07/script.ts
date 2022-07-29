/**
 * Union types -> São múltiplos tipos em uma variável 
 */

let idade: string | number = 90;
let idade2: string | number = '90'

function mostraIdade (idade: string | number) {
  typeof idade === 'number'
    ? console.log(idade)
    : console.log(idade.toLocaleUpperCase)
}

mostraIdade(idade)
mostraIdade(idade2)