/**
 * Uso do type void: O void é um type que utilizamos quando não esperamos nenhum retorno
 * Criamos uma função, fizemos o processo que queremos dentro dela e acabou
 * Quando eu não armazeno retorno de uma função eu posso especificar que o retorno dela será um void
 */

function removerElemento (el: HTMLElement): void {
  //.....Código omitido....//
  el.remove()
}

const elemento = document.querySelector('.teste') as HTMLElement

removerElemento(elemento)