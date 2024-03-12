type CarType = {
    name: string
    category: string
    year: number
    fuel: [string, string?]
}

class Car {
    name: string
    category: string
    year: number
    fuel: [string, string?]

    speedUp(){
        return 'Acelerando'
    }
    brake(){
        return 'Freiando'
    }

    constructor(car: CarType){
        this.category = car.category
        this.fuel = car.fuel
        this.name = car.name
        this.year = car.year
    }
}

const car01 = new Car({name: "sultan", category: "Sports vehicle", fuel: ["gas"], year: 2012})
console.log(car01, car01.speedUp(), car01.brake());
