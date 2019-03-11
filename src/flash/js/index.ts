import '@flash/css/flash.css'
import json from '@flash/js/flashcards.json'

/* Types */
type FlashcardDataMap = ObjectMap<string>

/* Function Declarations */
function getStringTemplate(name: string) : string {
 let x: HTMLElement = document.querySelector(`[type='photon/template'][name='${name}']`)
 return x.innerText
}
function replaceTemplateVar(tpl: string, key: string, value: string) : string {
    let pattern = new RegExp(`{{\\s?${key}\\s?}}`)
    
    let replaced = tpl.replace(pattern, value)
    return replaced
}

function appendTemplateToDom(tpl: string, parent: HTMLElement){
    // Create a div
    let temporaryWrapper = document.createElement('div')

    // Setting template to innerHTML
    temporaryWrapper.innerHTML = tpl

    // Get first child
    let element = temporaryWrapper.firstElementChild

    // Append child to flashcards
    parent.appendChild(element)
}

function createFlashcard(
    parent: HTMLElement, 
    tpl: string, 
    front: string, 
    back: string
) : void {
    // What does flashcard structure look like?
    // What content goes in the flashcard?
    tpl = replaceTemplateVar(tpl, 'flashcard__front', front)
    tpl = replaceTemplateVar(tpl, 'flashcard__back', back)
    // Append flashcard to dom
    appendTemplateToDom(tpl, parent)
}

function createFlashcards(data: FlashcardDataMap) : void {
    let tpl = getStringTemplate('flashcard')
    let parent: HTMLElement = document.querySelector('.flashcards')

    for(let [front, back] of Object.entries(data)){
        createFlashcard(parent, tpl, front, back)
    }
}

/* Execute */

function main(){
    let cardData: FlashcardDataMap = json.flashcards
    createFlashcards(cardData)
}
main()

{
   

    // tpl = replaceTemplateVar(tpl, 'flashcard__front', 'Array.prototype.slice()')
    // tpl = replaceTemplateVar(tpl, 'flashcard__back', 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.')
    
    // let parent: HTMLElement = document.querySelector('.flashcards')
    // appendTemplateToDom(tpl, parent)
    
    // let flashcards = document.querySelector('.flashcards')
    // let temporaryWrapper = document.createElement('div')
    // temporaryWrapper.innerHTML = tpl
    // let flashcard = temporaryWrapper.firstElementChild
    // flashcards.appendChild(flashcard)
}


// export function initFlash(){
//     let newFlash: HTMLElement = document.querySelector('#new')
    
//     newFlash.addEventListener('mouseover', () => {
//         //document.querySelector('#new').style.background = 'blue' //???
//         let flash = document.createElement('div')
//         //flash.style.background = 'pink'
//         flash.classList.add('flash')
//         let flashText = document.createTextNode('myFlash')
//         flash.appendChild(flashText)
//         let container = document.querySelector('#container')
//         container.appendChild(flash)
//     })

// }

