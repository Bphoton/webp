abstract class AbstractApp {
    public timeouts: { [key: string]: number } = {}

    constructor(){
        window.addEventListener('resize', (e: Event) => {
            this.onResize(e)

            this.timeouts['resize'] !== undefined 
                ? clearTimeout(this.timeouts['resize']) 
                : void 0

            this.timeouts['resize'] = setTimeout(() => {
                this.onResizeEnd(e)
            }, 200)
        })
    }

    protected onResize(e: Event){}
    protected onResizeEnd(e: Event){}
}
export default AbstractApp