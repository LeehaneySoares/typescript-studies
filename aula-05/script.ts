function criaPessoa (
  pessoa: {
    nome: string,
    sobrenome: string,
    idade: number,
    estadoCivil: string,
    filhos: Array<string>
  }
): string {
  let { nome, sobrenome, idade, estadoCivil, filhos } = pessoa
  return `${nome} ${sobrenome} tem ${idade} anos, é ${estadoCivil} e tem ${filhos.length} filhos.`
}


const pessoa = {
    nome: 'Leehaney',
    sobrenome: 'Soares',
    idade: 25,
    estadoCivil: 'Casado',
    filhos: ['Livia, joaquim', 'cleiton', 'michele']
	}

const p1: string = criaPessoa(pessoa)