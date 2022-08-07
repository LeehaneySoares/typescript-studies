"use strict";
function mostraUsuario(usuario) {
    return `
    ${usuario.nome} mora em: ${usuario.endereco}, tendo ${usuario.idade} anos.
    Dono dos seguintes documentos: ${usuario.documentos} 
    com os seguintes telefones: ${usuario.telefones.join(', ')}
  `;
}
mostraUsuario({
    nome: 'Leehaney',
    idade: 25,
    endereco: 'Av. Arquiteto Vilanova Artigas',
    documentos: ['RG', 'CPF', 'CNH'],
    telefones: [11940215919, 11982455840, 1193468477]
});
