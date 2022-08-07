"use strict";
function usuario(pessoa) {
    return pessoa.idade
        ? `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`
        : `${pessoa.nome} ${pessoa.sobrenome}, tudo bem ?`;
}
usuario(pessoa);
