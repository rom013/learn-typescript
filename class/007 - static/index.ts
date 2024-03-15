class Pessoa {
    // namePet: string

    // constructor(name: string){
    //     this.namePet = name
    // }

    static namePet: string = "Katrina"

    
}

// console.log(new Pessoa("Katrina"));
console.log(Pessoa.namePet);


class Notas {
    static calcularMedia(notas: number[]): number {
        const somaDasNotas = notas.reduce((total, nota) => total + nota, 0);

        const media = somaDasNotas / notas.length;

        return media;
    }
}

const notasDaTurma = [9.0, 7.0, 5.0, 4.0, 4.0];
const mediaTurma = Notas.calcularMedia(notasDaTurma);

console.log(`A média da turma é: ${mediaTurma.toFixed(2)}`);

