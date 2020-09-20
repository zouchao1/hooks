import render from '../index.js'
let lasteState = []
let data = { index: 0 }
export default function useState(initState) {
    lasteState[data.index] = lasteState[data.index] || initState
    const currentIndex = data.index
    function setState(newState) {
        lasteState[currentIndex] = newState
        render()
    }
    return [lasteState[data.index++], setState]
}
export { data }