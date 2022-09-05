class Animals {
    constructor(Name, Age, Status, Legs, Species) {
        this.name = Name
        this.age = Age
        this.status = Status
        this.legs = Legs
        this.species = Species
    }

    introduce() {
        return `Nama ${this.name}, Umur ${this.age}, Status ${this.status}, Kaki ${this.legs}, Spesies ${this.species}\n`
    }
}

class Shark extends Animals {
    constructor(Name, Age, Status) {
        super(Name, Age, Status)
        this.legs = 0
        this.species = 'Shark'
    }
}

const Hiu = new Shark('Guppy', 10, 'Berenang')
console.log(Hiu.introduce())


class Cat extends Animals {
    constructor(Name, Age, Status) {
        super(Name, Age, Status)
        this.legs = 4
        this.species = 'Cat'
    }
}

const Kucing = new Cat('Bailey', 3, 'Berjalan')
console.log(Kucing.introduce())


class Dog extends Animals {
    constructor(Name, Age, Status, Master) {
        super(Name, Age, Status)
        this.legs = 4
        this.species = 'Dog'
        this.master = Master
    }
    GreetMaster() {
        return `Hello, ${this.master}`
    }
}

const Anjing = new Dog('Zero', 5, 'Berjalan', 'Dhea')
console.log(Anjing.introduce())
console.log(Anjing.GreetMaster())