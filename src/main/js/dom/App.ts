import AbstractApp from './AbstractApp'

export default class App extends AbstractApp {
    public onResize(e: Event){
        console.log('Inherited Resize!')
    }

    public onResizeEnd(e: Event){
        console.log('Inherited ResizeEnd, Debounced!')
    }
}