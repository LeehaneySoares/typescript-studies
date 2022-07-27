/**
 * Tipando paraâmetros de funções
 * @param name 
 * @returns 
 */

function firstLetterUppercase (name: string): string {
  let firstLetter: string = name.charAt(0).toUpperCase()
  return `${firstLetter}${name.substring(1)}`
}

/**
 * Não vejo necessidades de tipar o retorno de uma arrow function
 */
const nome: Function = (name: string): string => name.charAt(0).toUpperCase + name.substring(1)
