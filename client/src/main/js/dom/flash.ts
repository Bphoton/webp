export function initFlash(){
    let newFlash: HTMLElement = document.querySelector('#new')
    
    newFlash.addEventListener('mouseover', () => {
        //document.querySelector('#new').style.background = 'blue' //???
        let flash = document.createElement('div')
        //flash.style.background = 'pink'
        flash.classList.add('flash')
        let flashText = document.createTextNode('myFlash')
        flash.appendChild(flashText)
        let container = document.querySelector('#container')
        container.appendChild(flash)
    })

}

