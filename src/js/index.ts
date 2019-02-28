
import Order, {stateCustom, stateDuplicate, stateInterject, stateProper, stateSkip} from '@js/state'
import {myCar} from '@js/stateCar'
import * as people from '@js/people'
import {adaptMicroUSB} from '@js/adapter'
import {facadeWatchMovie} from '@js/facade'
import {observeWeatherStation} from '@js/observer'
import {decorateCar} from '@js/decorator'
import {Game, Piece} from '@js/rps'
import App from '@js/dom/App'

let myGame = new Game
myGame.play(Piece.Rock)
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




// new App()

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


// function $<T extends Element>(
//     query: string, 
//     context: Element | Document = document
// ) : NodeListOf<T> {
//     return context.querySelectorAll(query)
// }

// let $thing: NodeListOf<HTMLAnchorElement> = $<HTMLAnchorElement>('a')

// Can this be implemented?
// $thing.text((element: HTMLAnchorElement, i: number) =>  i)

// myCar()

/**State*/
// stateCustom()
// stateDuplicate()
// stateInterject()
// stateProper()
// stateSkip()

/**Adapter */
// adaptMicroUSB()

/**Facade */
// facadeWatchMovie()

/**Observer */
// observeWeatherStation()

/**Decorator */
// decorateCar()

/**people.<i>*/
// people.



