let lastMemo
let lastMemoDependencies
export default function useMemo(callback, depencies) {
    if (lastMemoDependencies) {
        let changed = depencies.some((item, index) => {
            return item === lastMemoDependencies[index]
        })
        if (!changed) {
            lastMemoDependencies = depencies
            lastMemo = callback()

        }
    } else {
        lastMemoDependencies = depencies
        lastMemo = callback()
    }
    return lastMemo
}