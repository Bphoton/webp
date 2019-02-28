





////////////////////////////////////////////////////////////////////////////////////
//notes
////////////////////////////////////////////////////////////////////////////////////
//export const myConst: number = 5
//export const myConst2: number = 6
//const chickenNugget: string = 'chicken nugget' //err: defaults cannot have type declaration
// export default chickenNugget //good


//use console.log() with objects
// let myPeople: Array<Object|String> = [
//     {name: 'a'},
//     {name: 'b'},
//     {name: 'cc'}
// ]

// let myPeople:{
//     fn:string, 
//     ln:string
// } = {
//     fn: 'a', 
//     ln: 'b'
// }

interface IMyPeople{
    fn:string,
    ln:string
}
let myPeople: IMyPeople = {
    fn:'a',
    ln:'b'
}
// let myVar:string = myPeople.fn


let num:void = console.log(1)
let str:void = console.log('string')

// export class Test {}
export default myPeople;

function helloPeople(){
    return console.log('Hello People')
}

export {
    num, str, helloPeople
}

