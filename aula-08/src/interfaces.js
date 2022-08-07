"use strict";
function mostraUser(user) {
    return `
    ${user.nome} mora em: ${user.endereco}, tendo ${user.idade} anos.
    Dono dos seguintes documentos: ${user.documentos} 
    com os seguintes telefones: ${user.telefones.join(', ')}
  `;
}
mostraUser({
    nome: 'Leehaney',
    idade: 25,
    endereco: 'Av. Arquiteto Vilanova Artigas',
    documentos: ['RG', 'CPF', 'CNH'],
    telefones: [11940215919, 11982455840, 1193468477],
    peso: 78
});
