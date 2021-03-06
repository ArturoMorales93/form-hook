const processDates = (dob, constrainDate) => {
    const validYear = new Date().getFullYear() - constrainDate
    const validDate = new Date()
    validDate.setFullYear(validYear)
    validDate.setHours(0, 0, 0)
    const inputDate = new Date(`${dob}T00:00:00`)
    return [inputDate, validDate]
}

export const checkMinAge = dob => {
    const MIN_AGE = 12
    const [inputDate, validDate] = processDates(dob, MIN_AGE)
    if (inputDate < validDate) {
        return true
    } else {
        return `La edad mínima son ${MIN_AGE} años`
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

export const calculateAge = dob => {
    const birthday = new Date(`${dob}T00:00:00`)
    const validationDate = new Date()
    let diff = validationDate.getFullYear() - birthday.getFullYear()
    validationDate.setFullYear(validationDate.getFullYear() - diff)

    if (birthday > validationDate) {
        return diff -= 1
    } else {
        return diff
    }
}
