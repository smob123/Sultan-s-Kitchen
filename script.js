var expanded = false;
var name, email, phoneNum, message;
var elements = new Array();

function expand() {
    if (!expanded) {
        document.getElementById("mainNav").style.display = "inline";
        expanded = true;
    } else {
        document.getElementById("mainNav").style.display = "none";
        expanded = false;
    }
}

function displayNavMenu() {
    if (window.innerWidth > 480) {
        document.getElementById("mainNav").style.display = "block";
    }
}

function sendData() {
    for (var i = 0; i < VariableList().length; i++) {
        if (elements[i] === "") {
            alert("Please fill empty feilds");
            event.preventDefault();
            return;
        }
    }
    alert("Message sent!");
    event.preventDefault();
}

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

function VariableList() {
    name = document.getElementById("nameBox");
    email = document.getElementById("emailBox");
    phoneNum = document.getElementById("phoneBox");
    message = document.getElementById("messageBox");
    
    elements = [name.value, email.value, phoneNum.value, message.value];
    
    return elements;
}
