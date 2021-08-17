const useDateValidator = (dob) => {
    dob = new Date(dob)
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    if ((Math.abs(age_dt.getUTCFullYear() - 1970) >= 12)) {
        return true
    } else {
        return "La edad mínima son 12 años"
    }
}

export default useDateValidator