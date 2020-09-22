let lastDependencies
function useEffect(callback,dependencies){
    if (lastDependencies) {
        let changed = dependencies.some((item, index) => {
            return item === lastDependencies[index]
        })
        if (!changed) {
            setTimeout(callback)
            lastDependencies = dependencies
        }
    }else{
        setTimeout(callback)
        lastDependencies=dependencies
    }
}
export default useEffect