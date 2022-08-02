/**
 * Ao criar types para as function devemos criar como se estivessimos criando 
 * types para variáveis, porém sua assinatura é semelhante ao de uma arrow function
 * so que no retorno não implementamos código algum, inserimos apenas o tipo do retorno
 * Seria uma espécie de molde para a function com seus tipos!
 */

type MathFunction = (n1: number, n2: number) => number

const somar: MathFunction = (n1, n2) => n1 + n2
const subtrair: MathFunction = (n1, n2) => n1 - n2
const multiplicar: MathFunction = (n1, n2) => n1 * n2
const dividir: MathFunction = (n1, n2) => n1 / n2
