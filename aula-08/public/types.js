/**
 * Types são imutáveis, ao definir as props em seu corpo,
 * não podemos em outros lugares modifica-los, teremos que retornar aqui para realizar
 * uma nova inserção ou remoção
 */
function mostraUsuario(usuario) {
    return "\n    ".concat(usuario.nome, " mora em: ").concat(usuario.endereco, ", tendo ").concat(usuario.idade, " anos.\n    Dono dos seguintes documentos: ").concat(usuario.documentos, " \n    com os seguintes telefones: ").concat(usuario.telefones.join(', '), "\n  ");
}
mostraUsuario({
    nome: 'Leehaney',
    idade: 25,
    endereco: 'Av. Arquiteto Vilanova Artigas',
    documentos: ['RG', 'CPF', 'CNH'],
    telefones: [11940215919, 11982455840, 1193468477]
});
