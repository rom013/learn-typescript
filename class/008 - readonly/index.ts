class Pessoa {
    public name: string = "Enzo"
}

const pessoa = new Pessoa()
console.log(pessoa.name);

pessoa.name = "Sofia"
console.log(pessoa.name);


class Carro {
    public readonly marca: string = "BMW"
}

const carro = new Carro()
console.log(carro.marca);

// carro.marca = "Mercedes" -> não é possível alterar o valor desse atributo
console.log(carro.marca)