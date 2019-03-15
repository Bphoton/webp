
export function isUndefined(value: any) : value is null {
    return value === undefined
}

export function isNull(value: any) : value is null {
    return value === null
}

export function isString(value: any) : value is string {
    return typeof value === 'string'
}

export function isArray<T>(value: any) : value is Array<T> {
    return Array.isArray(value)
}

export function isHTMLInputElement(value: any) : value is HTMLInputElement {
    return value instanceof HTMLInputElement
} 

export function isHTMLUListElement(value: any) : value is HTMLUListElement {
    return value instanceof HTMLUListElement
} 

export function isHTMLLIElement(value: any) : value is HTMLLIElement {
    return value instanceof HTMLLIElement
} 

export function isHTMLFormElement(value: any) : value is HTMLFormElement {
    return value instanceof HTMLFormElement
} 

export function isHTMLSpanElement(value: any) : value is HTMLSpanElement {
    return value instanceof HTMLSpanElement
} 
