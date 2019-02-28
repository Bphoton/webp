abstract class Car{
    public abstract description:string;
    public getDescription():string{
        return this.description
    }
    public abstract cost():number
}

export class Model1 extends Car {
    public description:string = "Model 2"
    public cost():number {
        return 7000;
    }
}
export class Model2 extends Car{
    public description:string = "Model 2"
    public cost():number {
        return 8000
    }
}

abstract class CarOptions extends Car{
    public decorated:Car
    constructor(_Car:Car){
        super()
        this.decorated = _Car
    }
    public abstract getDescription():string
    public abstract cost():number
}

class Options1 extends CarOptions{
    public description: string;
    public decorated:Car
    constructor(_Car:Car){
        super(_Car)
        this.decorated = _Car
        this.description = ""
    }
    public getDescription(): string {
        return this.decorated.getDescription() + ' and option1'
    }    
    public cost(): number {
        return this.decorated.cost() + 1001
    }
}

class Options2 extends CarOptions{
    public description: string;
    decorated: Car
    constructor(_Car: Car){
        super(_Car)
        this.decorated = _Car
        this.description = ""
    }
    public getDescription(): string {
        return this.decorated.getDescription() + ' and option2'
    }    
    public cost(): number {
        return this.decorated.cost() + 2002
    }
}
export const decorateCar = ():void =>{
    let myCar = new Model1
    myCar = new Options1(myCar)
    myCar = new Options2(myCar)
    console.log('TCL: myCar', myCar.description)
    console.log('TCL: myCar', myCar.getDescription())
    console.log('TCL: myCar', myCar.cost())
}