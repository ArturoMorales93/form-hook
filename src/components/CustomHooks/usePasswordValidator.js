const usePasswordValidator = (value1, value2) => {
    if (value1 === value2) {
        return true
    } else {
        return false
    }
}

export default usePasswordValidator