const orders = [];
const total = document.getElementById('total');
let totalPrice = 0;
const itemList = document.getElementById('item-list');

updateTotalValue();

function addToOrder(price, name) {
    orders.push(`<div>
    <span>${name} ${price}</span>
 <button id='remove' onClick='removeFromOrder(${parseFloat(price)}, this)'>-</button></div>`);
    itemList.innerHTML += orders[orders.length - 1];
    totalPrice += parseFloat(price);
    updateTotalValue();
    cart.push([name, price]);
}

function removeFromOrder(price, elem) {
    const index = orders.indexOf(elem);
    orders.splice(index, 1);
    itemList.innerHTML = orders;
    totalPrice -= price;
    updateTotalValue();
}

function getTotalPrice() {
    return totalPrice;
}

function updateTotalValue() {
    total.innerHTML = '<p>Total: $' + totalPrice.toFixed(2) + '</p>';
}
