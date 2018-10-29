const total = document.getElementById('total');
let totalPrice = 0;
const itemList = document.getElementById('item-list');

updateTotalValue();

function addToOrder(price, name) {
    let orders = `<div>
    <span>${name} ${price}</span>
 <button id='remove' onClick='removeFromOrder(${price}, this)'>-</button></div>`;
    itemList.innerHTML += orders;
    totalPrice += parseFloat(price);
    updateTotalValue();
}

function removeFromOrder(price, elem) {
    elem.parentElement.style.display = 'none';
    totalPrice -= price;
    updateTotalValue();
}

function getTotalPrice() {
    return Math.abs(totalPrice);
}

function updateTotalValue() {
    total.innerHTML = '<p>Total: $' + totalPrice.toFixed(2) + '</p>';
}
