function usuario (pessoa: { nome: string, sobrenome: string, idade?: number }): string {
  return pessoa.idade
    ? `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`
    : `${pessoa.nome} ${pessoa.sobrenome}, tudo bem ?`
}

// const pessoa = {
//   nome: 'Leehaney',
//   sobrenome: 'Soares',
//   idade: 25 // É uma propriedade opcional
// }

usuario(pessoa)