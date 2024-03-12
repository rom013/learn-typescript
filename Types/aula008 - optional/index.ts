const fn = (name: string, age?: number) => {
    return `My name is ${name} ${age ? `and ${age} years old` : ""}`
}

console.log(fn("Katrina"))
console.log(fn("Katrina", 2))