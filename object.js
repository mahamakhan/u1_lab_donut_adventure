class Hamster {
  constructor(name, owner, price) {
    this.owner = ''
    this.name = name
    this.price = 15
  }
  wheelRun() {
    console.log('squeak squeak')
  }
  eatFood() {
    console.log('nibble nibble')
  }
  getPrice() {
    return this.price
  }
  newOwner() {
    this.owner = 'Timmy'
  }
}

class Person {
  constructor(name) {
    this.name = 0
    this.age = 0
    this.height = 0
    this.weight = 0
    this.mood = 0
    this.hamster = []
    this.bankAccount = 0
  }
  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getWeight() {
    return this.weight
  }
  greet() {
    console.log(`Hello I'm ${this.nam}`)
  }
  eat() {
    this.weight++
    this.mood++
  }
  exercise() {
    this.weight--
  }
  ageUp() {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount + 10
  }
  buyHamster(hamster) {
    return this.hamster.push(hamster)
    this.mood += 10
    this.bankAccount -= getPrice()
  }
}
const timmy = new Person('Timmy')
for (let i = 0; i < 5; i++) {
  ageup()[i]
  exercise()[i]
  eat()[i]
}
console.log(timmy)

for (let i = 0; i < 9; i++) {
  timmy.ageUp()
}
const gus = new Hamster('Gus')
gus.owner = timmy.name
timmy.buyHamster(Gus)

for (let i = 0; i < 15; i++) {
  timmy.ageUp()
}

timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
