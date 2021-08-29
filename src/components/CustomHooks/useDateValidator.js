const processDates = (dob, constrainDate) => {
    const validYear = new Date().getFullYear() - constrainDate
    const validDate = new Date()
    validDate.setFullYear(validYear)
    validDate.setHours(0, 0, 0)
    const inputDate = new Date(`${dob} 00:00:00`)
    
    return [inputDate, validDate]
}

export const checkMinAge = dob => {
    const MIN_AGE = 12
    const [inputDate, validDate] = processDates(dob, MIN_AGE)
    console.log(inputDate)
    if (inputDate < validDate) {
        return true
    } else {
        return `La edad mínima son ${inputDate} años ${validDate}`
    }
}

export const checkMaxAge = dob => {
    const MAX_AGE = 125
    const [inputDate, validDate] = processDates(dob, MAX_AGE)
    
    if (inputDate > validDate) {
        return true
    } else {
        return `La edad no puede exceder los ${MAX_AGE} años`
    }
}