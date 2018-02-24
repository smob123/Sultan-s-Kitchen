var expanded = false;
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
    alert("Message sent!");
    event.preventDefault();
}