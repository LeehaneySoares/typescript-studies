/**
 * Tipando paraâmetros de funções
 * @param name 
 * @returns 
 */

function firstLetterUppercase (name: string) {
  let firstLetter: string = name.charAt(0).toUpperCase()
  return `${firstLetter}${name.substring(1)}`
}

firstLetterUppercase('Leehaney')