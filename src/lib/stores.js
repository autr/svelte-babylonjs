import { writable } from 'svelte/store'

export const bbLookup = writable( new Map() )
export const bbDebug = writable( true )
export const bbIniting = writable( true )