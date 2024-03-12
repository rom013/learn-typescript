const arrayStrings1: [string, boolean, string, number] = ["banana", true, "maçã", 23]
const arrayStrings2: Array<string | number> = ["pera", 345, "abacaxi"]

console.log(arrayStrings1);
console.log(arrayStrings2);


const obj1: {
    lastName: string, 
    name: string,
    age: number
} = {
    name: "Katrina",
    lastName: "Catarina",
    age: 2
}

const obj2: Array<{
    lastName?: string, // opcional
    name: string,
    age: number
}> = [
    {
        name: "Katrina",
        lastName: "Catarina",
        age: 2
    },{
        age: 12,
        name: "Faraó"
    }
]

console.log(obj1);
console.log(obj2);