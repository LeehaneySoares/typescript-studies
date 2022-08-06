"use strict";
/**
 * Tipando paraâmetros de funções
 * @param name
 * @returns
 */
function firstLetterUppercase(name) {
    let firstLetter = name.charAt(0).toUpperCase();
    return `${firstLetter}${name.substring(1)}`;
}
/**
 * Não vejo necessidades de tipar o retorno de uma arrow function
 */
const nome = (name) => name.charAt(0).toUpperCase + name.substring(1);
