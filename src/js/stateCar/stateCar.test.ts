import Car from './stateCar'

let car: Car

describe('Create Instance', () => {
    beforeEach(() => {
        car = new Car()
    })

    test('Car starts in on state', () => {
        expect(car.getState()).toBe(car.carOn)
    })
})



describe('On State', () => {
    beforeEach(() => {
        car = new Car()
        car.setState(car.carOn)
    })

    test('cannot switch on state', () => {
        car.getState().carOn()
        expect(car.getState()).toBe(car.carOn)
    })
    
    test('can switch to off state', () => {
        car.getState().carOff()
        expect(car.getState()).toBe(car.carOff)
    })
})

