let lastCallback
let lastCallbackDependencies
export default function useCallback(callback, depencies) {
    if (lastCallbackDependencies) {
        let changed = depencies.some((item, index) => {
            return item === lastCallbackDependencies[index]
        })
        if (!changed) {
            lastCallbackDependencies = depencies
            lastCallback = callback

        }
    } else {
        lastCallbackDependencies = depencies
        lastCallback = callback
    }
    return lastCallback
}