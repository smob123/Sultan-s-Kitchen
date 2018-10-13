const menuItems = new Meals();
const orders = [];
const total = document.getElementById('total');
let totalPrice = 0;
let container = document.getElementById('orders');
const apDiv = document.getElementById('apptizers-content');
const mainDiv = document.getElementById('main-content');
const dessertDiv = document.getElementById('dessert-content');
const itemList = document.getElementById('item-list');

generateMenu();
updateTotalValue();

let ap = menuItems.getMealArray()[0];
let m = menuItems.getMealArray()[1];
let d = menuItems.getMealArray()[2];

let cart = [];

function addToOrder(price, name) {
    orders.push(`<div>
    <span>${name} ${price}</span>
 <button id='remove' onClcik='removeFromOrder(${parseInt(price)})'>-</button></div>`);
    itemList.innerHTML += orders[orders.length - 1];
    totalPrice += parseFloat(price);
    updateTotalValue();
    cart.push([name, price]);
}

function removeFromOrder(price) {
    totalPrice -= price;
    updateTotalValue();
}

function getTotalPrice() {
    return totalPrice;
}

function updateTotalValue() {
    total.innerHTML = '<p>Total: $' + totalPrice.toFixed(2) + '</p>';
}

function generateMenu() {
    menuItems.getMealArray().forEach((item, index) => {
        container.innerHTML +=
            `<div class='menu-items' >
            <h3> ${menuItems.getMealArray()[index].class} </h3>`

        for (let j = 0; j < menuItems.getMealArray()[index].meals.length; j++) {
            container.innerHTML +=
                `<div class='menu-items'>
                    <div>
                        <p> ${menuItems.getMealArray()[index].meals[j][1]} </p>
                        <img src='${menuItems.getMealArray()[index].meals[j][0]}'/>
                    </div>
            
                    <div id='add-remove-buttons'>
                        <p> ${menuItems.getMealArray()[index].meals[j][2]} </p>
                        <button id='add' onclick="addToOrder( '${menuItems.getMealArray()[index].meals[j][2]}' , 
                        '${menuItems.getMealArray()[index].meals[j][1]}')"> + </button>
                        <button id='remove' onclick='removeFromOrder( ${menuItems.getMealArray()[index].meals[j][2]})'>-</button>
                   </div>
                    </div>
        </div>`;
        }
    });
}
