// usado quando temos um retorno infinito ou erro

const errora = (): never => {
    throw new Error("Algo deu ruim")
}

errora()