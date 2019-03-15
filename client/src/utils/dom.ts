//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom class
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class GetElementBy {
    id(e: string) {
        console.log('--id--');
        console.log('id', document.getElementById(e));
    }
    tagName(e: string) {
        console.log('--tagName--');
        console.log('tag name:', document.getElementsByTagName(e));
    }
    name(e: string) {
        console.log('--Name--');
        console.log('name:', document.getElementsByName(e));
    }
    class(e: string) {
        console.log('--Class Name--');
        console.log('Class:', document.getElementsByClassName(e));
    }
}
export class QuerySelector {
    qs(e: string) {
        console.log('--qs--');
        console.log('qs:', document.querySelector(e))
    }
    qss(e: string) {
        console.log('--qss--');
        console.log('qss:', Array.from(document.querySelectorAll(e)).forEach((ee) => { console.log(ee) }))
    }
}
export class Doc {
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

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//dom fun
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class PhotonElement {
    private _element: Element

    constructor(element: Element | null){
        if(element === null) throw new Error('Element was invalid')
        this._element = element
    }

    public find(query: string){
        $(query, this._element)
    }
}

export function $(query: string, context: Element | Document = document) : PhotonElement {
    return new PhotonElement(context.querySelector(query))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//url
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function getUrlParams() {
    let params = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        params[key] = value;
        return m
    });
    return params;
}