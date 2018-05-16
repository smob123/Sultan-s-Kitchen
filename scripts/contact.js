var contactInfo = [];

/*
 * handle displaying contact form messages
 */

function sendData() {
    for (var i = 0; i < VariableList().length; i++) {
        //if a text feild is empty
        if (contactInfo[i] === "") {
            alert("Please fill empty feilds"); //require user to fill empty feilds
            event.preventDefault(); //do not refresh page
            return;
        }
    }
    alert("Message sent!"); //else send message
    event.preventDefault(); //do not refresh page
}

/*
 * highlight empty feilds
 */
////////////////////////////////////////////
function validateEmail(email) {
    if (!email.checkValidity() || email.value === "") {
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid green";
    }
}

function validatePhone(phoneNumber) {
    if (!phoneNumber.checkValidity() || phoneNumber.value === "") {
        phoneNumber.style.border = "2px solid red";
    } else {
        phoneNumber.style.border = "2px solid green";
    }
}
/////////////////////////////////////////////

/*
 * list of text feilds
 */

function VariableList() {
    name = document.getElementById("nameBox");
    email = document.getElementById("emailBox");
    phoneNum = document.getElementById("phoneBox");
    message = document.getElementById("messageBox");

    contactInfo.push(name.value, email.value, phoneNum.value, message.value);

    return contactInfo;
}
