// JS
import Order, {stateCustom, stateDuplicate, stateInterject, stateProper, stateSkip} from '@main/js/state'
import {myCar} from '@main/js/stateCar'
import * as people from '@main/js/people'
import {adaptMicroUSB} from '@main/js/adapter'
import {facadeWatchMovie} from '@main/js/facade'
import {observeWeatherStation} from '@main/js/observer'
import {decorateCar} from '@main/js/decorator'
import {Game, Piece} from '@main/js/rps'
import App from '@main/js/dom/App'

// DOM
import {initAdd, initDelete, initHide, initTabbed, initSearchBooks} from './dom/ninja'

// CSS
import '@main/css/ninja.css'



// let myGame = new Game
// myGame.play(Piece.Rock)


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

/**dom */
function main(){
    initDelete()
    initAdd()
    initHide()
    initSearchBooks()
    initTabbed()
    
}
 
main()