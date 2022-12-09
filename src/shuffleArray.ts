import {ReactNode} from "react"

export default function shuffleArray(array: Array<ReactNode>) {
    return array
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}
