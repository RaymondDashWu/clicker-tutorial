let cookieCount = 0;
let clickPower = 50;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;
let cookieCounter = document.getElementById("cookie-counter");
let cookieClicker = document.getElementById("cookie-clicker");
let buyClickPower = document.getElementById("buy-click-power");
let clickPowerPrice = document.getElementById("click-power-price");
let clickPowerLevel = document.getElementById("click-power-level");
let clickPowerMultiple = document.getElementById("click-power-multiple");
let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount
};
let refreshPowerClick = function () {
    clickPowerLevel.innerHTML = clickPowerLevelNumber
    clickPowerPrice.innerHTML = clickPowerPriceAmount
    clickPowerMultiple.innerHTML = clickPower;
};

cookieClicker.addEventListener("click", function () {
    cookieCount += clickPower;
    refreshCookieCount()
})

buyClickPower.addEventListener("click", function () {
    if (cookieCount >= clickPowerPriceAmount) {
        // FOR DEBUGGING console.log("Item successfully bought");
        // Subtracts cookies from price of power up
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount();
        // Upgrades power by 1
        clickPowerLevelNumber += 1;
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.337);
        refreshPowerClick();
        // Updates price of click power up
        clickPowerPrice = Math.floor(clickPowerPrice * 3.456)
        clickPower += 1;
        refreshPowerClick();
    } else {
        // FOR DEBUGGING console.log("You don't have enough cookies!");
    }
})