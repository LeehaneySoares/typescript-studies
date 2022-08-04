interface Details {
  nome: string,
  sobrenome: string,
  telefones: Array<number>,
  documentos: 'RG' | 'CPF' 
}

const usuario: Details = {
  nome: 'Leehaney',
  sobrenome: 'Soares',
  telefones: [11940215919, 982455842],
  documentos: 'CPF'
}

function detalhaUsuario (usuario: Details): string {
  return `Teste...`
}

detalhaUsuario(usuario)