interface Subject{
    registerObserver(o: Observer): void
    removeObserver(o: Observer): void
    notifyObservers(): void
}

interface Observer{
    update(temperature:number): void
}

class WeatherStation implements Subject{
    private observers: Observer[] = []
    private temperature:number = 0
    setTemperature(temp:number){
        console.log('TCL: WeatherStation -> setTemperature -> new temp', temp)
        this.temperature = temp;
        this.notifyObservers()
    }
    registerObserver(o: Observer): void {
        this.observers.push(o)
    }
    removeObserver(o: Observer): void {
        let index = this.observers.indexOf(o)
        this.observers.splice(index, 1)
    }
    notifyObservers(): void {
        for(let observer of this.observers){
            observer.update(this.temperature)
        }
    } //Subject
}
class TemperatureDisplay implements Observer{
    private subject: Subject
    constructor(_weatherStation: Subject){
        this.subject = _weatherStation
        _weatherStation.registerObserver(this)
        
    }
    update(temperature: number): void {
        console.log('TCL: TemperatureDisplay -> Need to update temperature', temperature)
        
    } //Observer
    
}

class Fan implements Observer{
    private subject: Subject
    constructor(_weatherStation: Subject){
        this.subject = _weatherStation
        _weatherStation.registerObserver(this)
    }
    update(temperature: number): void {
        if(temperature > 25){
			console.log('TCL: Fan -> temperature auto turn ON')
        }else{
			console.log('TCL: Fan -> temperature auto turn OFF')
        }
    }
}

export const observeWeatherStation = ():void => {
    let myWeatherStation = new WeatherStation
    let myTempDisplay = new TemperatureDisplay(myWeatherStation)
    let myFan = new Fan(myWeatherStation)

    myWeatherStation.setTemperature(20)
    console.log('-------------------------------');
    myWeatherStation.setTemperature(30)
}