import {isEverySet, isSet} from '@utils/fun'
import {
    isArray, isUndefined, isNull, isString, isHTMLUListElement, isHTMLLIElement, 
    isHTMLInputElement, isHTMLFormElement, isHTMLSpanElement
} from '@utils/typeGuards'

// delete books
export function initDelete(){
    let list: HTMLElement | null = document.querySelector('#book-list ul')
    if(list !== null){
        list.addEventListener('click', (e: Event) => { //??? syntax err but still working
            if(e.target == null || list == null) return
            let target: HTMLElement = e.target as HTMLElement
            if(target.classList.contains('delete')){ //better to use classList contains than className == (if there are possibly multiple classes next to each other class="myClass1 myClass2") (className == myClass1 //would not exits)
                let li: HTMLElement | null = target.parentElement // li << span
                if(li !== null){
                    list.removeChild(li)
                }
            }
        })
    }
}

// add books
export function initAdd(){
    let list: HTMLElement | null = document.querySelector('#book-list ul')
    const addForm = document.forms['add-book']
    addForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        if(list == null) return

        const value = addForm.querySelector('input[type="text"]').value
        console.log('value', value);
        
        //create elements (2) span and (1) li
        // then nest the structures by: append span to the li; append li to the ul 
        const li = document.createElement('li')
        const bookName = document.createElement('span')
        const delBtn =  document.createElement('span')

        // add content
        delBtn.textContent = 'delete'
        bookName.textContent = value

        // add classes //css will now be automatically applied
        bookName.classList.add('name')
        delBtn.classList.add('delete')
        //delBtn.classList.remove('delete') // 

        // append to dom // order matters here
        li.appendChild(bookName)
        li.appendChild(delBtn)
        list.appendChild(li)
    })
}

// #15 - Checkboxes & Change Events
// hide books:
export function initHide(){
        let list: HTMLElement | null = document.querySelector('#book-list ul')
        const hideBox: HTMLInputElement | null = document.querySelector('#hide')
        // NOTE: Requires HTMLInputElement for checked property

        if(hideBox !== null){
            hideBox.addEventListener('change', (e: Event) => {
                if(list == null || hideBox == null) return
        
                if(hideBox.checked){
                    list.style.display = 'none'
                } else {
                    list.style.display = 'block' //or 'initial'
                }
            })
        }
    }

// Seach books
export function initSearchBooks(){
        let list: HTMLElement | null = document.querySelector('#book-list ul')
        let form$searchBook: HTMLFormElement | undefined = document.forms['search-books'] 
		console.log('TCL: initSearchBooks -> searchBook', typeof form$searchBook)
        if(!isHTMLFormElement(form$searchBook)) return
    
        let searchBar: HTMLInputElement | null = form$searchBook.querySelector('input')
        if(!isHTMLInputElement(searchBar)) return
 
        searchBar.addEventListener('keyup', (e: KeyboardEvent) => {
            const target: EventTarget | null = e.target
            if(!isHTMLUListElement(list) || !isHTMLInputElement(target)) return
 
            const term: string = target.value.toLowerCase();
            const books: HTMLCollectionOf<HTMLLIElement> | null = list.getElementsByTagName('li')
            Array.from(books).forEach((b) => {
                const firstChildElement: Element | null= b.firstElementChild
                console.log(firstChildElement)
                if(!isHTMLSpanElement(firstChildElement)) return 
 
                const title: string | null = firstChildElement.textContent
                if(!isString(title)) return
 
                if(title.toLowerCase().indexOf(term) != -1){
                    b.style.display = 'block'
                } else {
                    b.style.display = 'none'
                }
            })
        })
    }

// //#17 - Tabbed Content:
export function initTabbed(){
    const tabs: HTMLElement | null = document.querySelector('.tabs') //ul
    const panels = document.querySelectorAll('.panel') //content
    //if(tabs !== null){
        tabs.addEventListener('click', (e: Event) =>{
            const target: EventTarget | null = e.target
            //if(target !== null){  
                const tagNames: string = target.tagName
                    //if(tagNames == 'LI'){
                        const targetPanel = document.querySelector(e.target.dataset.target)
                        panels.forEach((p) => {
                            if (p == targetPanel){
                                p.classList.add('active')
                            } else {
                                p.classList.remove('active')
                            }
                        })
                    //}
            //}
        })
}