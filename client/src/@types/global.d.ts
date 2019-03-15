declare module '*.json'

// note: Example of how to custom declare third-party types
// declare module 'jquery' {
//     export class JQuerySelection {}
//     export function $(query: string) : JQuerySelection
// }

type ObjectMap<T> = { [key: string]: T }