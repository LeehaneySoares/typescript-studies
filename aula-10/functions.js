"use strict";
/**
 * Type Literal: podemos criar, por assim dizer, nossos types em variáveis, functions, etc.
 * os tipos literais são utilizados para firmar um retorno, ou seja, o retorno deve ser o tipo em si
 * e não o conteúdo, por Exemplo:
 */
function montaDiv(name, position) {
    return `
    <div style="text-align: ${position}">
      ${name}
    </div>`;
}
// Dessas 3 formas o typescript irá aceitar
montaDiv('Leehaney', 'left');
montaDiv('Leehaney', 'right');
montaDiv('Leehaney', 'center');
// Caso eu passe outro valor diferente dos acima ele não irá aceitar!
montaDiv('Leehaney', 'down');
function config(props) {
    return props;
}
config({ width: 100, height: 100 });
// OU
config('auto');
// Caso queira passar outro valor o Typescript não deixará
config('300px');
