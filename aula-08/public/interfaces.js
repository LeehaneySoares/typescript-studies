/**
 * Interfaces são semelhantes a Types, com a diferença sendo que podemos alterar,
 * inserir, remover props existentes
 */
function mostraUser(user) {
    return "\n    ".concat(user.nome, " mora em: ").concat(user.endereco, ", tendo ").concat(user.idade, " anos.\n    Dono dos seguintes documentos: ").concat(user.documentos, " \n    com os seguintes telefones: ").concat(user.telefones.join(', '), "\n  ");
}
mostraUser({
    nome: 'Leehaney',
    idade: 25,
    endereco: 'Av. Arquiteto Vilanova Artigas',
    documentos: ['RG', 'CPF', 'CNH'],
    telefones: [11940215919, 11982455840, 1193468477],
    peso: 78
});
