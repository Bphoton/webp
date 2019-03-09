import * as functions from './typeGuards'

export function isSet(value: any) : boolean {
    return !functions.isNull(value) && !functions.isUndefined(value)
}

export function isEverySet(...values: any[]) : boolean {
    return values.every(isSet)
}