let menuItems = new Meals();
let total;
let totalPrice = 0;
let container;
let apDiv, mainDiv, dessertDiv;

let ap = menuItems.getMealArray()[0];
let m = menuItems.getMealArray()[1];
let d = menuItems.getMealArray()[2];

function addToOrder(price) {
    totalPrice += price;
    updateTotalValue();
}

function removeFromOrder(price) {
    totalPrice -= price;
    updateTotalValue();
}

function getTotalPrice() {
    return totalPrice;
}

function updateTotalValue() {
    total.innerHTML = '<p>Total: $' + totalPrice + '</p>';
}

function defineVars() {
    container = document.getElementById('orders');
    total = document.getElementById('total');
    apDiv = document.getElementById('apptizers-content');
    mainDiv = document.getElementById('main-content');
    dessertDiv = document.getElementById('dessert-content');
    generateMenu();
    updateTotalValue();
}

function generateMenu() {
    for(let i = 0; i < menuItems.getMealArray().length; i++) {
        container.innerHTML += '<h3>' + menuItems.getMealArray()[i].class + '</h3>';
        for(let j = 0; j < menuItems.getMealArray()[i].meals.length; j+=2) {
            container.innerHTML += '<p>' + menuItems.getMealArray()[i].meals[j] + '</p>'
                    + '<p>' + menuItems.getMealArray()[i].meals[j+1] + '</p>'
            +"<button id='add' onclick='addToOrder(" + menuItems.getMealArray()[i].meals[j+1] + ")'>+</button>"
            + "<button id='remove' onclick='removeFromOrder("+ menuItems.getMealArray()[i].meals[j+1] + ")'>-</button>";
        }
    }
}
