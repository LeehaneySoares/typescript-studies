/**
 * No tsconfig podemos configurar a chave removeComments para que no arquivo final
 * .js apareça ou não comentários. É sempre interessante deixar essa chave setada como true e 
 * descomentada, pois comentários são apenas para deve, não gera em nada no arquivo final compilado
 */

const teste: string = 'Esse arquivo está comentado'

/**
 * noUnusedLocals: Emite um aviso quando declararmos uma variável em um escopo local
 * e não utilizamos ela.
 */

let outroNome: string = 'Leehaney'

function soma (n1: number, n2: number): number {
  let nome: string = 'Leehaney'
  return n1 + n2
}

/**
 * noUnusedParameters: É similar ao noUnusedLocals, porém com os parâmetros. Caso declararmos
 * parâmetros em uma função e não estamos utilizando todos, ele irá emitir um aviso e não compilará
 * nosso código caso estivermos com o noEmitOnError ativado!
 */

function sub (n1: number, n2: number, n3: number): number {
  return n1 - n2
}