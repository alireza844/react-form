export const validate = data => {

    const {name, email, password, confirmPassword, isAccepted} = data

    const errors = {};

    if(!name.trim()) {
        errors.name = "Username required"
    } else {
        delete errors.name
    }

    if(!email) {
        errors.email = "Emial required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Email address is invalid"
    } else {
        delete errors.email
    }

    if(!password) {
        errors.password = "Password is required"
    } else if (password.length < 6) {
        errors.password = "Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!confirmPassword) {
        errors.confirmPassword = "Confirm the password"
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Password do not match"
    } else {
        delete errors.confirmPassword
    }

    if (isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted = "Accept our regulations"
    }

    return errors

}