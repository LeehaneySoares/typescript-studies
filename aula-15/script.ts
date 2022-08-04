type Falar = (text: string) => string
type Calcular = (n1: number, operator: string, n2: number) => string

interface Person {
  name: string,
  age: number,
  phones: Array<number>
  falar: Falar,
  calcular: Calcular
}

const pessoa: Person = {
  name: 'Leehaney',
  age: 25,
  phones: [1199945454, 1193245653],
  falar: (text) => `Olá, estou falando: ${text}`,
  calcular: (n1, operator, n2) => eval(`${n1}${operator}${n2}`)
}

console.log(pessoa.calcular(2, '+', 2))