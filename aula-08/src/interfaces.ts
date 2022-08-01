/**
 * Interfaces são semelhantes a Types, com a diferença sendo que podemos alterar,
 * inserir, remover props existentes
 */

interface Usuario {
  nome: string,
  idade: number,
  endereco: string,
  documentos: Array<string>,
  telefones: Array<number>
}

function mostraUser (user: Usuario): string {
  return `
    ${user.nome} mora em: ${user.endereco}, tendo ${user.idade} anos.
    Dono dos seguintes documentos: ${user.documentos} 
    com os seguintes telefones: ${user.telefones.join(', ')}
  `
}

// Com o mesmo nome de interface, posso adicionar mais props

interface Usuario {
  peso: number
}

mostraUser({
  nome: 'Leehaney',
  idade: 25,
  endereco: 'Av. Arquiteto Vilanova Artigas',
  documentos: ['RG', 'CPF', 'CNH'],
  telefones: [11940215919, 11982455840, 1193468477],
  peso: 78
})