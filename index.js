// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    return bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "michael";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Anton";
    return leastFavoriteCustomer;
}