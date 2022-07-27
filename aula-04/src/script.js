/**
 * Tipando paraâmetros de funções
 * @param name
 * @returns
 */
function firstLetterUppercase(name) {
    var firstLetter = name.charAt(0).toUpperCase();
    return "".concat(firstLetter).concat(name.substring(1));
}
// var nome = function (name) { return name.charAt(0).toUpperCase + name.substring(1); };
// console.log(nome('leehaney'));

console.log(firstLetterUppercase('leehaney'))
