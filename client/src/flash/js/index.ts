

import '@flash/css/flash.css'
import json from '@flash/js/flashcards.json'
import { isString } from '@utils/typeGuards';

/* Types */
type FlashcardDataMap = ObjectMap<string>

/* Function Declarations */
function getStringTemplate(name: string) : string {
 //and statement ???
 let x: HTMLElement = document.querySelector(`[type='photon/template'][name='${name}']`) 
 return x.innerText
}

//(getStringTemplate(), {find_this_str}, {front | back})
//(tpl::within string => key::{find_this_sub_str} => replace key with value::{front | back})
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
    //console.log(temporaryWrapper.innerHTML = tpl) //one for every json object

    // Get first child
    let element = temporaryWrapper.firstElementChild
	//console.log('TCL: appendTemplateToDom -> element', element)

    // Append child to flashcards
    parent.appendChild(element)
    //console.log('append',parent.appendChild(element))
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
let myo = { //??? error
    aaa: document.querySelector('#SelectFontOptions'),
    bbb: document.querySelector('#CustomStyle')
}
function selectFont(){
    let fonts = {
        Srisakdi: "Srisakdi, cursive",
        Indie_Flower: "'Indie Flower', cursive",
        Lato: "'Lato', sans-serif"
    }
 
    let o:HTMLSelectElement = document.querySelector('#SelectFontOptions')
    let selectedFont:string = o.options[o.selectedIndex].value; 
    let selectedFontKey:string = fonts[selectedFont]  

    setCustomStyles(selectedFontKey)
}

function setCustomStyles(font:string): void{
    let myStyles:HTMLStyleElement = document.querySelector('#CustomStyle')
    myStyles.innerText = getCustomCSSText(font)
}
let getCustomCSSText = (fontFamily:string) =>
    `.flashcards {
        font-family: ${fontFamily};
        font-size: 14px;
    }`


function main(){
    // click event on font selection
    document.querySelector('#SelectFontOptions').addEventListener('change', selectFont)

    let tpl = getStringTemplate('flashcard')
    let parent: HTMLElement = document.querySelector('.flashcards')
    let form: HTMLFormElement = document.querySelector('#AddFlash')
    
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault()
        // Get Input Values
        let frontInput: HTMLInputElement = document.querySelector('#AddFront')
        let front: string = frontInput.value
        let backInput: HTMLInputElement = document.querySelector('#AddBack')
        let back: string = backInput.value
        
        // Validate Input Values
        if(!isString(front && back))
            throw Error(`Expected non-empty string, got:
            '${front}' for front
            '${back}' for back`)
        
        // Do action
        createFlashcard(parent, tpl, front, back)

        // Clear Inputs
        frontInput.value = ''
        backInput.value = ''
    })

    let cardData: FlashcardDataMap = json.flashcards
    createFlashcards(cardData)
    selectFont()
    
}
main()
/*
todo: 
___ prevent enter from submitting https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
___ clear input on submit
___ list of fonts (just 2 or 3) 
--- toggle italics `font-style` https://www.w3schools.com/css/css_font.asp
--- toggle bold 
--- paste image
--- sets
--- objects of I know it or i dont
--- store the information on a server
--- parse Json within the form input
--- manipulate text: for memorization techniques
___ prevent hover on front card
___ text center: front card
___ text wrap
??? right click menu - can I create my own
??? code syntax highlighting
??? speak text
??? speech recognition
*/


/**************************************** Notes ********************************/
/*//document.querySelector('#Demo').innerHTML = selectedFontKey*/

/* my click event */
// https://www.w3schools.com/code/tryit.asp?filename=G1ZL7H10BUYQ

/* my user selected option*/
// https://www.w3schools.com/code/tryit.asp?filename=G21NFVU4AYG4

/* find element types */
// console.log({ type: frontInput.constructor.name })
// HTML<<tab>>Element: ie HTMLInputElement
 
/* forms */
// all forms input is of type sting. Parse input to get other types
// forms have an eventListener of type submit. Not the button within the forms
// <input> areas are more for one liners. Enter is submit by default
// <textarea> are more for multiple liners. Enter will not submit by default


/* HTML JS query selector */
// best to worst for creating elements:
//  creating a Node Element: ie document.createTextNode('t')
//  innerText: ie document.querySelector('#a').innerText = 'my text'
//  innerHTML: ie document.querySelector('#a').innerHTML = 'im inside an element'
// loop o
    // let addFront: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flashcard')
    
    // addFront.forEach((e: HTMLDivElement) => {
    //     let fontStyle: CSSStyleDeclaration = e.style
    //     let fontFamily: string = fontStyle.fontFamily = selectedFontKey 
    // })
// Can select where text is put in the DOM
// let t = document.createTextNode('t')
// document.body.appendChild(t)

// Deletes everything in body
// document.body.innerText = '<h2>You smell</h2>'


// 1.
// export function initFlash(){
//     let newFlash: HTMLElement = document.querySelector('#new')
    
//     newFlash.addEventListener('mouseover', () => {
//         //document.querySelector('#new').style.background = 'blue'
//         let flash = document.createElement('div')
//         //flash.style.background = 'pink'
//         flash.classList.add('flash')
//         let flashText = document.createTextNode('myFlash')
//         flash.appendChild(flashText)
//         let container = document.querySelector('#container')
//         container.appendChild(flash)
//     })

// }

