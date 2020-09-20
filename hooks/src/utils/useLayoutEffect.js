let lastDependencies
function useLayoutEffect(callback,dependencies){
    if (lastDependencies) {
        let changed = dependencies.some((item, index) => {
            return item === lastDependencies[index]
        })
        if (!changed) {
            Promise.resolve().then(callback)
            // queueMicrotask(callback)
            lastDependencies = dependencies
           

        }
    }else{
        Promise.resolve().then(callback)
        // queueMicrotask(callback)
        lastDependencies=dependencies
    }
}
export default useLayoutEffect