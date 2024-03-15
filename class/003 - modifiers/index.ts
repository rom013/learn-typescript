/*
    public - pode ser acessado pela propria classe ou classe filha ou classe externas
    protected - só pode ser acessada pela mesma classe ou classe filha
    private - só pode ser acessada por ela mesma
*/

type CarType = {
    name: string
    category: string
    year: number
    fuel: [string, string?]
}

class Car {
    public name: string
    public category: string
    public year: number
    public fuel: [string, string?]

    private speedUp(){
        return 'Acelerando'
    }
    protected brake(){
        return 'Freiando'
    }

    constructor(car: CarType){
        this.category = car.category
        this.fuel = car.fuel
        this.name = car.name
        this.year = car.year

        console.log(this.brake(), this.speedUp());
        
    }
}

const car01 = new Car({name: "sultan", category: "Sports vehicle", fuel: ["gas"], year: 2012})
console.log(car01);