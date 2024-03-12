// a classe serve como um modelo para criar um objeto, evitando ter que recirar varias vezes o mesmo objeto

// objeto convencional

let Dog01: {name: string, lastName?: string, age: number} = {
    name: "Katrina",
    age: 2
}

let Dog02: {name: string, lastName?: string, age: number} = {
    name: "Faraó",
    age: 11,
    lastName: "Egito"
}

// usando classe

class Pessoa {
    name: string
    age: number
    lastName?: string

    constructor(name: string, age: number, lastName?: string){
        this.age = age
        this.name = name
        this.lastName = lastName
    }
}

const person01 = new Pessoa("Ronaldo", 20) // o new serve para criar um NOVO objeto
const person02 = new Pessoa("Mary", 19, "Santos")

console.log(person01, person02);


