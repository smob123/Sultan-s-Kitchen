var totalPrice = 0;

function addToOrder(price) {
    totalPrice += price;
}

function removeFromOrder(price) {
    totalPrice -= price;
}

function getTotalPrice() {
    return totalPrice;
}
