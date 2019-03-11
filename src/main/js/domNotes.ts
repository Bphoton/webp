// import {Doc, GetElementBy, QuerySelector} from '../utils/domClass'
// import {isEverySet, isSet} from '../utils/fun'
// import {$, PhotonElement} from '../utils/domFun'
// import {isArray, isUndefined, isNull, isString, isHTMLUListElement, isHTMLLIElement, isHTMLInputElement, isHTMLFormElement} from '../utils/typeGuards'


// git https://github.com/iamshaunjp/JavaScript-DOM-Tutorial/tree/lesson-17 web https://www.youtube.com/watch?v=G5Or47gPH-4&index=18&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
//make sure dom is fully loaded

// TODO: After everything is organized, move main function into global scope and uncomment
// document.addEventListener('DOMContentLoaded', main)

/* document.addEventListener('DOMContentLoaded', function(){
   class GetElementBy {
       id(e: string) {
           console.log('-------------------id---------');
           console.log('id', document.getElementById(e));
       }
       tagName(e: string) {
           console.log('------------tagName-----------');
           console.log('tag name:', document.getElementsByTagName(e));
       }
       name(e: string) {
           console.log('---------------Name-----------');
           console.log('name:', document.getElementsByName(e));
       }
       class(e: string) {
           console.log('---------Class Name-----------');
           console.log('Class:', document.getElementsByClassName(e));
       }
   }
   class QuerySelector {
       qs(e: string) {
           console.log('-------------------qs---------');
           console.log('qs:', document.querySelector(e))
       }
       qss(e: string) {
           console.log('------------------qss---------');
           console.log('qss:', Array.from(document.querySelectorAll(e)).forEach((ee) => { console.log(ee) }))
       }
   }
   class Doc {
       private selector: QuerySelector
       private getElementBy: GetElementBy
       constructor(_selector: QuerySelector, _getElementBy: GetElementBy) {
           this.selector = _selector
           this.getElementBy = _getElementBy
       }
       public qs(e: string) {
           this.selector.qs(e)
       }
       public qss(e: string) {
           this.selector.qss(e)
       }
       public id(e: string) {
           this.getElementBy.id(e)
       }
       public tag(e: string) {
           this.getElementBy.tagName(e)
       }
       public name(e: string) {
           this.getElementBy.name(e)
       }
       public class(e: string) {
           this.getElementBy.class(e)
       }
    */
//    }
// //USE:
//    let querySelector = new QuerySelector()
//    let getElementBy = new GetElementBy()
//    let d = new Doc(querySelector, getElementBy)
   
   //d.id('wrapper') //.innerHTML = 'hello' //because return of void
   //d.tag('li')
   //d.qs('#book-list li:nth-child(2) .name')
   //d.qss('li')
   //d.class('title')
   // let books = d.qss('#book-list li .name')
   // console.log('TCL: books', books)
   
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //notes
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   
////     let thing = document.querySelectorAll('hi')
////    thing.forEach(element => element.innerHTML = '<div>HI</div>')
   
/*    class PhotonElement {
       private _element: Element
   
       constructor(element: Element | null){
           if(element === null) throw new Error('Element was invalid')
           this._element = element
       }
   
       public find(query: string){
           $(query, this._element)
       }
   }
   
   function $(query: string, context: Element | Document = document) : PhotonElement {
       return new PhotonElement(context.querySelector(query))
   }

   ///$('#book-list') //.find('ul')
     console.log('TCL: $(#book-list)', typeof $('#book-list'))//.find('ul')) //???: how to make this work 
*/
   
   ///const tittle: HTMLCollectionOf<HTMLTitleElement> = document.getElementsByTagName('title')
   // Array.from(tittle).forEach(():void=>console.log(tittle))
   // console.log('object');
   
   // const wrap = document.querySelector('#wrapper')
   // console.log('TCL: wrap', wrap)
   
   // const aBook = document.querySelector('#book-list li:nth-child(2) .name')
   // console.log('TCL: wrap', aBook)
   
   // const aBook3 = document.querySelector('ul li:nth-child(2) .name')
   // console.log('TCL: aBook2', aBook3)
   
   // const aBook2 = document.querySelector('li:nth-child(2) .name')
   // console.log('TCL: aBook3', aBook2)
   
   // const aBook4 = document.querySelector('.name')
   // console.log('TCL: aBook3', aBook4)
   
   // let bookss:HTMLCollectionOf<Element> = document.getElementsByClassName('name') //need to turn this into an array since this is a collection
   
   /// to text
   // let books: NodeListOf<Element> = document.querySelectorAll('#book-list li .name') /**dont need to turn turn a nodelist into an array, but for an html collection such as class we do */
   // console.log('TCL: books',  books)
   // Array.from(books).forEach(b => console.log(b.textContent))
   
   /// change text
   // let books: NodeListOf<Element> = document.querySelectorAll('#book-list li .name') /**dont need to turn turn a nodelist into an array, but for an html collection such as class we do */
   // console.log('TCL: books',  books)
   // Array.from(books).forEach(b => console.log(b.textContent = 'test'))
   
   /// add to text // nbot working
   // let books: NodeListOf<Element> = document.querySelectorAll('#book-list li .name') /**dont need to turn turn a nodelist into an array, but for an html collection such as class we do */
   // console.log('TCL: books',  books)
   // Array.from(books).forEach(b => console.log(b.textContent += 'test'))
   
   // let booklist = document.querySelector('#book-list')
   // console.log('TCL: booklist', booklist)
   
   // let booklist = document.querySelector('#book-list')
   // console.log('TCL: booklist', booklist.innerHTML)
   
   // let booklist = document.querySelector('#book-list').innerHTML = '<h2>books and more books<h2>'
   /// does not work ???
   // booklist.innerHTML += '<p>hell</p>'
   
   // different node types https://www.youtube.com/watch?v=YIG2_UB-C7o&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=6
   // everything is a node but there are different types 
   // each node configuration can be considered as node as well <p ...config></p>
   
   // let banner = document.querySelector('#page-banner')
   // console.log('TCL: banner', banner)
   // console.log('TCL: node type', banner.nodeType) //lookup nodetypes return values
   // console.log('TCL: node name', banner.nodeName) //lookup nodetypes return values
   // console.log('TCL: has child node', banner.hasChildNodes()) //lookup nodetypes return values
   // let cloneBanner = banner.cloneNode(true)
   // console.log('TCL: cloneBanner', cloneBanner) //true for nested child nodes
   
   ///traversing the DOM https://www.youtube.com/watch?v=VMRo6Uv856E&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=7
   
   //let booklist = document.querySelector('#book-list ') //(... h2 | ul | li)
   //.childNodes //text line break
   //.children
   //.parentElement
   //.nextSibling //text line break 
   //.nextElementSibling
   //.previousSibling //text line break 
   //.previousElementSibling
   //.previousElementSibling.querySelector('p').innerHTML += '</br>too cool'
   //console.log(booklist)
   
   //let parentNode: (Node & ParentNode) | null = booklist.parentNode
   //console.log(parentNode);
   
   //////same as Node | Element
   // let parentNode: (Node & ParentNode) | Element | null = booklist.parentElement
   // console.log(parentNode);
   
   // let parentNode: (Node & ParentNode) | Element | null = booklist.parentElement
   // console.log(parentNode);
   
   // let parentNode: (Node & ParentNode) | Element | null = booklist.parentElement.parentElement
   // console.log(parentNode);
   
   ///////line breaks as 'text'
   // let parentNode: (Node & ParentNode) | Element | null = booklist.childNodes
   // console.log(parentNode); 
   
   // let parentNode: (Node & ParentNode) | Element | null = booklist.children
   // console.log(parentNode); 
   
   //click events https://www.youtube.com/watch?v=3J3AV3763hE&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=8
   /////////////////////Events
   // let booklist = document.querySelector('#book-list h2') //(... h2 | ul | li)
   // .addEventListener('click', (e) => {
   //     console.log('e', e);
   //     console.log('target', e.target);
   // })
   
   
  //// prevent default of a hyperlink
   // const link = document.querySelector('#page-banner a')
   // link.addEventListener('click', (e) => {
   //         e.preventDefault()
   //         console.log('default prevented', e.target.textContent);
   //     })
       
   ////click events: delete elements | NOT THE BEST WAY TO DO IT | avoid for loops if possible, see next ex
   // let booklist: NodeListOf<Element> = document.querySelectorAll('#book-list .delete') // li li li li
   // console.log('TCL: ',
   //     booklist.forEach((b => {
   //         b.addEventListener('click', (b) => {
   //             const myli = b.target.parentElement //li << span
   // 			console.log('TCL: myli', myli)
   //             myli.parentNode.removeChild(myli) //ul then remove its child li
   //         })
   //     }))
   // )
   
   // event bubbling https://www.youtube.com/watch?v=SqQZ8SttQsI&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=10
   // Note: the event listener for (.delete) is not a good model because if you add another button,
   // the event listener wont work and if there are too many buttons, attaching event listeners to every button is unsustainable 
   // bc its an expensive task
   // a better way is with event bubbling:
   
   // let list = document.querySelector('#book-list ul')
   // list.addEventListener('click', (e) => { //??? syntax err but still working
   //     if(e.target.className == 'delete'){
   //         let li = e.target.parentElement // li << span
   //         list.removeChild(li)
   //     }
   // })

   // let list: HTMLElement | null = document.querySelector('#book-list ul')
   // if(list !== null){
   //     list.addEventListener('click', (e: Event) => { //??? syntax err but still working
   //         if(e.target == null || list == null) return
   //         let target: HTMLElement = e.target as HTMLElement
   //         if(target.classList.contains('delete')){
   //             let li: HTMLElement | null = target.parentElement // li << span
   //             if(li !== null){
   //                 list.removeChild(li)
   //             }
   //         }
   //     })
   // }
   
/*    let list: HTMLElement | null = document.querySelector('#book-list ul')
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
   } */

   //////#11 Interacting with Forms  https://www.youtube.com/watch?v=n4B7vY9SIds&index=11&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
   // to best query forms is not by tag name but document.forms :: HTMLCollection of forms
   // document.forms[0] or document.forms['myID']
   // add books & prevent default of: refreshing the page and removing the changes:
   // #12 - Creating Elements https://www.youtube.com/watch?v=Nx2AhrCIlXE&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=12
/*    const addForm = document.forms['add-book']
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
       //delBtn.classList.remove('delete') // note: to remove 
   
       // append to dom // order matters here
       li.appendChild(bookName)
       li.appendChild(delBtn)
       list.appendChild(li)
   }) */


   //note: to add style  and class (for class: its not the best way)
   // const li = document.querySelector('li:last-child')
   // li.style.marginTop = '60px'
   // li.style.color = 'red'
   // li.className = 'myClass' //not working
   // li.className += ' myClass2' //not working
   
   // #14 accessing-Atributes aka classes, styles, ids
   // let book = document.querySelector('li:first-child .name')
   // console.log('TCL: book', book)
   // console.log('attribute class is:', book.getAttribute('class')); //get attribute
   // //console.log('attribute class is:', book.getAttribute('href')); //if there is one
   // book.setAttribute('class', 'myClass2'); //set attribute
   // console.log('getAttribute:', book.getAttribute('class')) //get changed class
   // console.log('hasAttribute', book.hasAttribute('class')); //true
   // book.removeAttribute('class') //remove attr
   // console.log('get attr after remove attribute:', book.getAttribute('class')); //try to get removed attr
   // console.log('hasAttribute', book.hasAttribute('class')); //find if attr axist
   
   // #15 - Checkboxes & Change Events
   // hide books:
   const hideBox: HTMLInputElement | null = document.querySelector('#hide')
   // NOTE: Requires HTMLInputElement for checked property

/*    if(hideBox !== null){
       hideBox.addEventListener('change', (e: Event) => {
           if(list == null || hideBox == null) return
   
           if(hideBox.checked){
               list.style.display = 'none'
           } else {
               list.style.display = 'block' //or 'initial'
           }
       })

       // const handleHideBoxChange = (e: Event) => {
       //     // NOTE: Another way to get element, if you did not have access to 'hideBox' in scope/closure

       //     // let target: EventTarget | null = e.target
       //     // if(list == null || target == null) return
       //     // let hideBox: HTMLInputElement = target as HTMLInputElement
       //     if(list == null || hideBox == null) return

       //     if(hideBox.checked){
       //         list.style.display = 'none'
       //     } else {
       //         list.style.display = 'block' //or 'initial'
       //     }
       // }

   }
    */
   
   // #16 - Custom Search Filter
   // filter books

   // let form$searchBook: HTMLFormElement | undefined = document.forms['search-books']
   // if(form$searchBook !== undefined){
   //     let searchBar = form$searchBook.querySelector('input')
   //     searchBar.addEventListener('keyup', (e) => {
   //         const term = e.target.value.toLowerCase();
   //         const books = list.getElementsByTagName('li')
   //         Array.from(books).forEach((b) => {
   //             const title = b.firstElementChild.textContent
   //             if(title.toLowerCase().indexOf(term) != -1){
   //                 b.style.display = 'block'
   //             } else {
   //                 b.style.display = 'none'
   //             }
   //         })
   //     })
   // }

   // TODO: Add better comment for this datapoint stuff

   // interface DataPoint {
   //     id: string
   //     value: number
   // }

   // interface ContainerDataPoint extends DataPoint {
   //     type: string
   // }

   // interface StackDataPoint extends DataPoint {
   //     maxHeight: number
   // }

   // // NOTE: Not possible with interfaces, use a class
   // // if(container instanceof ContainerDataPoint)


   // function isDataPoint(value: any) : value is DataPoint {
   //     let valueAsDataPoint: DataPoint = value
   //     return isEverySet(
   //         valueAsDataPoint.id,
   //         valueAsDataPoint.value,
   //     )
   //     // return isSet(valueAsContainerDataPoint.id)
   //     //     && isSet(valueAsContainerDataPoint.value)
   //     //     && isSet(valueAsContainerDataPoint.type)

   // }

   // function isContainerDataPoint(value: any) : value is ContainerDataPoint {
   //     let valueAsContainerDataPoint: ContainerDataPoint = value
   //     return isDataPoint(valueAsContainerDataPoint) && isEverySet(
   //         valueAsContainerDataPoint.type
   //     )
   //     // return isSet(valueAsContainerDataPoint.id)
   //     //     && isSet(valueAsContainerDataPoint.value)
   //     //     && isSet(valueAsContainerDataPoint.type)

   // }

   // function isStackDataPoint(value: any) : value is StackDataPoint {
   //     let valueAsStackDataPoint: StackDataPoint = value
   //     return isDataPoint(valueAsStackDataPoint) && isEverySet(
   //         valueAsStackDataPoint.maxHeight
   //     )
   // }

   // let container: ContainerDataPoint = {
   //     id: '010w0q0h00',
   //     value: 25,
   //     type: 'IMPORT'
   // }

   // let stack: StackDataPoint = {
   //     id: '0A1234',
   //     value: 5,
   //     maxHeight: 6
   // }

   // let dataPoints: DataPoint[] = [container, stack]

   // dataPoints.forEach(dataPoint => {
   //     if(isContainerDataPoint(dataPoint)){
   //         // Do stuff unique for containers
   //     } else if(isStackDataPoint(dataPoint)){
   //         // Do stuff unique for stacks
   //     }
   // })



   // // TODO: Move utility functions into separate file

   // function isSet(value: any) : boolean {
   //     return !isNull(value) && !isUndefined(value)
   // }

   // function isEverySet(...values: any[]) : boolean {
   //     return values.every(isSet)
   // }

   // // TODO: Move typeguards into another file

   // function isUndefined(value: any) : value is null {
   //     return value === undefined
   // }

   // function isNull(value: any) : value is null {
   //     return value === null
   // }

   // function isString(value: any) : value is string {
   //     return typeof value === 'string'
   // }

   // function isArray<T>(value: any) : value is Array<T> {
   //     return Array.isArray(value)
   // }

   // function isHTMLInputElement(value: any) : value is HTMLInputElement {
   //     return value instanceof HTMLInputElement
   // } 

   // function isHTMLUListElement(value: any) : value is HTMLUListElement {
   //     return value instanceof HTMLUListElement
   // } 

   // function isHTMLLIElement(value: any) : value is HTMLLIElement {
   //     return value instanceof HTMLLIElement
   // } 

   // function isHTMLFormElement(value: any) : value is HTMLFormElement {
   //     return value instanceof HTMLFormElement
   // } 

/*    function initSearchBooks(){
       let form$searchBook: HTMLFormElement | undefined = document.forms['search-books']
       //if(!isHTMLFormElement(form$searchBook)) return
   
       let searchBar: HTMLInputElement | null= form$searchBook.querySelector('input')
       //if(!isHTMLInputElement(searchBar)) return

       searchBar.addEventListener('keyup', (e: KeyboardEvent) => {
           const target: EventTarget | null = e.target
           //if(!isHTMLUListElement(list) || !isHTMLInputElement(target)) return

           const term: string = target.value.toLowerCase();
           const books: HTMLCollectionOf<HTMLLIElement> | null = list.getElementsByTagName('li')
           Array.from(books).forEach((b) => {
               const firstChildElement: Element | null= b.firstElementChild
               //if(!isHTMLLIElement(firstChildElement)) return

               const title: string | null = firstChildElement.textContent
               //if(!isString(title)) return

               if(title.toLowerCase().indexOf(term) != -1){
                   b.style.display = 'block'
               } else {
                   b.style.display = 'none'
               }
           })
       })
   }

   // TODO: Organize all functions into a main function
   function main(){
       initSearchBooks()
   }

   main() */

   // let form$searchBook: HTMLFormElement | undefined = document.forms['search-books']
   // if(isHTMLFormElement(form$searchBook)){
   //     let searchBar: HTMLInputElement | null= form$searchBook.querySelector('input')
   //     if(isHTMLInputElement(searchBar)){
   //         searchBar.addEventListener('keyup', (e: KeyboardEvent) => {
   //             const target: EventTarget | null = e.target
   //             if(!isHTMLUListElement(list) || !isHTMLInputElement(target)) return
   //             // NOTE: Inverse to avoid brackets / nesting
   //             // if(target !== null && list !== null && target instanceof HTMLInputElement){
   //             // }

   //             const term: string = target.value.toLowerCase();
   //             const books: HTMLCollectionOf<HTMLLIElement> | null = list.getElementsByTagName('li')
   //             Array.from(books).forEach((b) => {
   //                 const firstChildElement: Element | null= b.firstElementChild
   //                 if(firstChildElement !== null){
   //                     const title: string | null = firstChildElement.textContent
   //                     if(title !== null){
   //                         if(title.toLowerCase().indexOf(term) != -1){
   //                             b.style.display = 'block'
   //                         } else {
   //                             b.style.display = 'none'
   //                         }
   //                     }
   //                 }
   //             })
   //         })
   //     }

   // }
   
   
/*    // //#17 - Tabbed Content:
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
   //} */
   
   
   
//})

