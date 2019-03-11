

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom notes
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function myFun<T>(arg: T): T{ //input and output have to be the same //<T> is just the name of the type para. It can be called anything
//     return arg
// }
// myFun(11) //good
// myFun('str') //good
// let myNum:number = myFun(11) //good
// let myStr:string = myFun('str') //good
// let myNum2:number = myFun('str') //err
// let myStr2:string = myFun(11) //err

// ////////
// Ex 2
// ////////
// class Person{
//     fn:string
//     ln:string
//     constructor(_fn:string, _ln:string){
//         this.fn = _fn
//         this.ln = _ln
//     }
//     getFN(){
//         console.log(`${this.fn} ${this.ln}`); 
//     }
// }
// class MyExtentionOfPerson1 extends Person{
// }
// class MyExtentionOfPerson2 extends Person{
// }
// // let myPerson = new Person('a', 'b')
// //    .getFN() //if this () is called, myPerson becomes of type void
// let myExtention1 = new MyExtentionOfPerson1('aa', 'bb')
// //    .getFN() //if this () is called, myExtention1 becomes of type void
// let myExtention2 = new MyExtentionOfPerson2('aaa', 'bbb')
// //    .getFN() //if this () is called, myExtention2 becomes of type void

// function myReturnPerson1<T>(person: T): T { //<T> is of type MyExtentionOfPerson1 :: of type MyExtentionOfPerson1
//     return person
// }
// let inputEqualOutput1 = myReturnPerson1(myExtention1) //if arg is of type MyExtentionOfPerson1 :: of type MyExtentionOfPerson1


// ////////////////////Ex 2.1 
// function myReturnPerson11(person: Person): Person { //instead of type MyExtentionOfPerson1 we can force it to be of type Person
//     return person
// }
// let inputEqualOutput11 = myReturnPerson11(myExtention1) //instead of type MyExtentionOfPerson1 we can force it to be of type Person


//////////////////Ex 2.2 
// class NotExtendPerson{
// }
// let notExtendPerson = new NotExtendPerson
// function myReturnPerson2<T extends Person>(_person: T): T { //arg _person has to extend Person & if <T> is of type extention1 :: of type extention1
//     return _person
// }
// let inputEqualOutput2 = myReturnPerson2(notExtendPerson) //err: arg notExtendPerson is not of type nor extends Person

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom notes
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  import * as people from '@p/people'
//  console.log(people)
// console.log('TCL: myConst2', myConst2)
// console.log('TCL: myConst', myConst)
// let myconst:number = 4
// console.log('TCL: myconst', myconst)

// after configuring webpack.config.js
// we dont need the following syntex with ! require('!style-loader!css-loader!../style.css'), just need:
// import '@css/main.css'
// import myP from './people' // Default export
// import { default as myP } from './people'// Default renamed export
// import { a as A, b as B } from './people' // Named export
// import myP, { a, b } from './people' // Default and Named exports
// import * as people from './people' // See whats going on
// console.log(people)

//import myP from './people'
//import myP from './people'

//import $ from 'jquery'
//require('../../public/assets/main.css') 

// let html = require('../public/__index.html')
// let cssLoader = require('css-loader!../public/assets/style.css')

// let [[path, css, _]] = cssLoader

// console.log(html)
// console.log({
//     cssLoader
//     // styleLoader
// })

//alert('hello world')
// $('body').append(`<style>${css}</style>`)


// 
//console.log('.' + process.cwd() + 'src/js/index.ts');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//implicit of type any
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface Thing {
    // note: Usually a mistake
    [key: string]: number | string
    value: number
    id: string
    // isMale: boolean
}

interface ThingMap {
    [key: string] : Thing
}

let thing: Thing = {
    value: 1,
    id: 'A'
}

let keys: string[] = ['value', 'id']
for(let key of keys){
    let value = thing[key]
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//play game
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//myGame.cpu()
//myGame.cpu()
// let myArr = [
//     [11], [22,33],
//     [22], [33,11],
//     [33], [11,22]
// ]
// let myStrArr = [
//     ['11'], ['22','33'],
//     ['22'], ['33','11'],
//     ['33'], ['11','22']
// ]
// let myIndex: Array<number> = [11,22,33,44,55]
// let myRules: Array<Array<number>> = [[22, 33],[33,44],[44,55],[55,11],[11,22]]
// //let myRules: Array<Array<string>> = [['22', '33'],['33','44'],['44','55'],['55','11'],['11','22']]

// let outer = myIndex.indexOf(33)


//console.log(myRules[outer][1])
// for(let i = 0; i < myRules[outer].length; i++){
//     if(myRules[outer][i] === 33){
//         console.log('true:', myRules[outer][i]);
//     }else{
//         console.log('false:', myRules[outer][i]);
//     }
// }


// for(let i = 0; i < myRules.length; i++){
//     //console.log(myRules[i], i)
//     for(let j = 0; j < myRules[i].length; j++){
//         //console.log(myRules[i][j])
//         if (myRules[i][j] === outer){
//             console.log('true::', myRules[i][j]);
            
//         }else{
//             console.log('false::', myRules[i][j]);
//         }
//     }
// }



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// window.addEventListener('load', (e: Event) => {
//     console.log('Loaded')
// })

// window.addEventListener('DOMContentLoaded', (e: Event) => {
//     console.log('DOM Content Loaded')
// })

// let anchor: HTMLAnchorElement | null = document.querySelector('a')
// if(anchor !== null){

// }

// let allDivs: NodeListOf<HTMLDivElement> = document.querySelectorAll('div')
// let divsArray: HTMLDivElement[] = Array.from(allDivs)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//generics
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function $<T extends Element>(
//     query: string, 
//     context: Element | Document = document
// ) : NodeListOf<T> {
//     return context.querySelectorAll(query)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let $thing: NodeListOf<HTMLAnchorElement> = $<HTMLAnchorElement>('a')

// Can this be implemented?
// $thing.text((element: HTMLAnchorElement, i: number) =>  i)