const firstName = document.getElementById("firstname")
const firstNameError = document.getElementById("firstnameerror")
const lastName = document.getElementById("lastname")
const lastNameError = document.getElementById("lastnameerror")
const address = document.getElementById("address")
const addressError = document.getElementById("addresserror")
const phoneNumber = document.getElementById("phonenumber")
const phoneNumberError = document.getElementById("phonenumbererror")
const email = document.getElementById("email")
const emailError = document.getElementById("emailerror")


function validate(id) {

    switch(id) {
        case "firstname":
            if(firstName.value.search(/[0-9]/) === -1) {
                firstNameError.classList.add("hidden")
            } else {
                firstNameError.classList.remove("hidden")
            }
            break;
        case "lastname":
            if(lastName.value.search(/[0-9]/) === -1) {
                lastNameError.classList.add("hidden")
            } else {
                lastNameError.classList.remove("hidden")
            }
            break;
        case "address":
            if(address.value.search(/^(?:[0-9]+[a-zA-Z\s])/) === -1) {
                addressError.classList.remove("hidden")
            } else {
                addressError.classList.add("hidden")
            }
            break;
        case "phonenumber":
            let num = phoneNumber.value.length
            if(phoneNumber.value.search(/^(?:[0-9]+[-])/) === -1 || num !== 12) {
                phoneNumberError.classList.remove("hidden")
            } else {
                phoneNumberError.classList.add("hidden")
            }
            break;
        case "email":
            if(email.value.search(/\S+@\S+\.\S+/) === -1) {
                emailError.classList.remove("hidden")
            } else {
                emailError.classList.add("hidden")
            }
            break;     
    }
}
function alertFunction() {
    alert(
        `       First Name: ${firstName.value}
        Last Name: ${lastName.value}
        Address: ${address.value}
        Phone number: ${phoneNumber.value}
        Email: ${email.value}`
    )
}