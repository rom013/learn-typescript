class Animal {
    protected classe: string
    protected nomeCientifico: string
    public habitat: string

    constructor(classe: string, nomeCientifico: string, habitat: string){
        this.classe = classe
        this.nomeCientifico = nomeCientifico
        this.habitat = habitat
    }
}

class Cachorro extends Animal { // informa que a classe Cachorro esta ligada com a classe Animal
    public nome: string
    public idade: number

    #image: string = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // OR
    // private image: string = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    constructor(nome: string, idade: number){
        // this.nome = nome ### 'super' deve ser chamado antes de acessar 'this' no construtor de uma classe derivada.

        super("mamifero", 'Canis lupus familiaris', "terrestre") // Chama o construtor da classe pai, sem o super não é possivel acessar os atributos da classe pai
        this.nome = nome
        this.idade = idade
    }

    getImage(){
        return this.#image
    }

}

const katrina = new Cachorro("Katrina", 2)
const katrinaHabitat = katrina.habitat
//katrina.nomeCientifico error: não pode ser acessado pois o nomeCientifico está com o modificador protected
const image = katrina.getImage()
// katrina.image ## propriedada 'image' é privada e só pode ser acessada com a classe 'Cachorro'

console.log(katrina);
console.log(katrinaHabitat);
console.log(image);
