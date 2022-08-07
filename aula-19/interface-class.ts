interface Comparable {
  comparableTo(b): number
}

/**
 * Aqui estamos dizendo que nossa class MyObject deve implementar um método comparableTo() (assim como temos em nossa interface)
 */

class MyObject implements Comparable {
  age: number

  comparableTo(b): number {
    if (this.age === b.age) return 0
    return this.age > b.age ? 1 : -1
  }
}