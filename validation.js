

const displayMsg = (msg, id, colorName) => {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = colorName

}
const fnameValidation = () => {
    const full_Name = document.getElementById('fullname').value

    if (full_Name == "") {
        displayMsg('full name is required', 'fnameMsg', 'red')
        return false
    }
    else if (!full_Name.match(/^[a-z]+$/)) {
        displayMsg('full name only contains lowercase alphabets', 'fnameMsg', 'red')
        return false

    }

    else if (full_Name.length < 3) {
        displayMsg('full name must be more than 3 char', 'fnameMsg', 'red')
        return false
    }
    else {
        displayMsg('valid fullname', 'fnameMsg', 'green')
        return true
    }
}



const emailValidation = () => {
    const email = document.getElementById('email').value

    if (email == "") {
        displayMsg('Email is required', 'emailMsg', 'red')
        return false
    }
    else if (!email.match(/^([a-z0-9])[a-z0-9\-\_\.]+\@+[a-z]+\.+[a-z]+$/)) {
        displayMsg('inavalid email format', 'emailMsg', 'red')
        return false

    }

    else {
        displayMsg('valid Email', 'emailMsg', 'green')
        return true
    }
}




const passValidation = () => {
    const password = document.getElementById('email').value

    if (password == "") {
        displayMsg('pass is required', 'passwdMsg', 'red')
        return false
    }

    else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[@#$?!_])/)) {

    }
    else {
        displayMsg('password', 'passwdMsg', 'green')
        return true
    }
}


// const CpValidation= () => {
//     const password= document.getElementById('pwd').value
//     const cpassword= document.getElementById('cpwd').value


//     if (password !== cpassword) {
//         displayMsg('valid', 'cpasswdMsg', 'red')
//         return false
//     }


//     else {
//         displayMsg('password both matched', 'cpasswdMsg', 'green')
//         return true
//     }
// }


const validForm = () => {
    if (fnameValidation() && emailValidation() && passValidation()) {
        return true
    }
    else {
        return false
    }
}