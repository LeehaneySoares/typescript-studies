/**
 * Tipando paraâmetros de funções
 * @param name 
 * @returns 
 */

function firstLetterUppercase (name: string): string {
  let firstLetter: string = name.charAt(0).toUpperCase()
  return `${firstLetter}${name.substring(1)}`
}

const nome = (name: string) => name.charAt(0).toUpperCase + name.substring(1)
