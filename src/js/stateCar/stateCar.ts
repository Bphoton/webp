/**stateCar */
interface IState{
    car:Car
    carOn():void
    carOff():void
    carShiftDown():void
    carShiftUp():void
}

export default class Car {
    public carOn:IState
    public carOff:IState
    public carReverse:IState
    public carShiftFirstGear:IState
    public carShiftSecondGear:IState
    public currentState:IState = this.carOn

    constructor(){
        this.carOn = new CarOn(this)
        this.carOff = new CarOff(this)
        this.carReverse = new CarReverse(this)
        this.carShiftFirstGear = new CarShiftFirstGear(this)
        this.carShiftSecondGear = new CarShiftSecondGear(this)
        this.setState(this.carOn)
    }
    public setState(_state:IState){
        this.currentState = _state
    }
    public getState():IState{
        return this.currentState
    }
     
}
export class CarOn implements IState{
    car: Car;
    public park:void = console.log('Car is in <<Park>>');  
    constructor(_car:Car) {
        this.car = _car        
    }
      
    carOn(): void {
        console.log('err car is already on');
    }
    carOff(): void {
        console.log("turning car off from on");
        this.car.setState(this.car.carOff)
    }
    carShiftDown(): void {
        console.log('putting car in reverse');
        this.car.setState(this.car.carReverse)
    }
    carShiftUp(): void {
        console.log("shifting to first gear");
        this.car.setState(this.car.carShiftFirstGear)
    }


}
export class CarOff implements IState{
    car: Car;    
    constructor(_car:Car){
        this.car = _car
    }
    carOn(): void {
        console.log('turning car on from off');
        this.car.setState(this.car.carOn)
    }
    carOff(): void {
        console.log('err car is already off');
    }
    carShiftDown(): void {
        console.log('err need to turn car on');
        console.log('err then shift to first gear before shifting down')
    }
    carShiftUp(): void {
        console.log('err need to turn car on first before shifting up');
    }

}
export class CarReverse implements IState{
    car: Car;    
    constructor(_car:Car){
        this.car = _car
    }
    carOn(): void {
        console.log('putting car in reverse');
        this.car.setState(this.car.carReverse)
    }
    carOff(): void {
        console.log('turning car off from reverse')
        this.car.setState(this.car.carOff)
    }
    carShiftDown(): void {
        console.log('err have to be in park or a higher gear to shift down');
    }
    carShiftUp(): void {
        console.log('shifting to park from reverse');
        this.car.setState(this.car.carOn)
    }


}

export class CarShiftFirstGear implements IState{
    car: Car;    
    constructor(_car:Car){
        this.car = _car
    }
    carOn(): void {
        console.log('err car is already on');
    }
    carOff(): void {
        console.log('err have to be in park to turn car off');
        console.log('err would you like to put the car in park then turn car off?')
    }
    carShiftDown(): void {
        console.log("shifting down to park")
        this.car.setState(this.car.carOn)
    }
    carShiftUp(): void {
        console.log('shifting up to second gear');
        this.car.setState(this.car.carShiftSecondGear)
    }

  
}

class CarShiftSecondGear implements IState{
    car: Car;    
    constructor(_car:Car) {
        this.car = _car        
    }
    carOn(): void {
        console.log('err car is already on');
    }
    carOff(): void {
        console.log('err car needs to be in park or reverse to turn the car off');
    }
    carShiftDown(): void {
        console.log('shifting to first gear')
        this.car.setState(this.car.carShiftFirstGear)
    }
    carShiftUp(): void {
        console.log('err your getting too excited this car only has 2 gears')
    }

}

export const myCar = ():void =>{
    console.log('Running state Car')
    let car = new Car()
    car.getState().carOff()
    car.getState().carOn()
    car.getState().carShiftDown()
    car.getState().carShiftUp()
    car.getState().carShiftUp()
    car.getState().carShiftUp()
    car.getState().carShiftUp()
    car.getState().carOff()
    car.getState().carShiftDown()
    car.getState().carShiftDown()
    car.getState().carOff()
}