import render from '../index.js'
let lastState

function useReducer(reducer, initState) {
    lastState = lastState || initState

    function dispacth(action) {
        lastState = reducer(lastState, action)
        render()
    }
    return [lastState, dispacth]
}
export default useReducer