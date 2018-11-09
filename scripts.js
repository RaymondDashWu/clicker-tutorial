/* Make School Cookie Clicker Tutorial
                .---. .---.
               :     : o   :    me want cookie!
           _..-:   o :     :-.._    /
       .-''  '  `---' `---' "   ``-.
     .'   "   '  "  .    "  . '  "  `.
    :   '.---.,,.,...,.,.,.,..---.  ' ;
    `. " `.                     .' " .'
     `.  '`.                   .' ' .'
      `.    `-._           _.-' "  .'  .----.
        `. "    '"--...--"'  . ' .'  .'  o   `.
        .'`-._'    " .     " _.-'`. :       o  :
  jgs .'      ```--.....--'''    ' `:_ o       :
    .'    "     '         "     "   ; `.;";";";'
   ;         '       "       '     . ; .' ; ; ;
  ;     '         '       '   "    .'      .-'
  '  "     "   '      "           "    _.-'

------------------------------------------------
Thank you for visiting https://asciiart.website/
This ASCII pic can be found at
https://asciiart.website/index.php?art=television/sesame%20street
*/

// TOFIX: Fix logic on being able to buy items without being able to afford it***

// Default Values
let cookieCount = 0;
let clickPower = 50;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// DOM declarations
let cookieCounter = document.getElementById("cookie-counter");
let cookieClicker = document.getElementById("cookie-clicker");
let buyClickPower = document.getElementById("buy-click-power");
let clickPowerPrice = document.getElementById("click-power-price");
let clickPowerLevel = document.getElementById("click-power-level");
let clickPowerMultiple = document.getElementById("click-power-multiple");
let bannerMessageUpdate = document.querySelector(".banner-message");

// Functions
// Refreshes cookieCounter & clickPower variables
let refreshCookieCount = function () {
    cookieCounter.innerHTML = cookieCount;
};
let refreshPowerClick = function () {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
};
let refreshGrandma = function () {
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
};
let refreshFacility = function () {
    facilityLevel.innerHTML = facilityLevelNumber;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

let refreshAutoFacility = function () {
    facilityAutoLevel.innerHTML = facilityAutoLevelNumber;
    facilityAutoPrice.innerHTML = facilityAutoPriceAmount;
    facilityAutoMultiple.innerHTML = facilityAutoPower;
}

let notEnoughCookiesError = function () {
    bannerMessageUpdate.innerHTML = "You do not have enough cookies to buy this!"
}

// clickPower is increased by 1 every time this is clicked
cookieClicker.addEventListener("click", function () {
    cookieCount += clickPower;
    refreshCookieCount()
})

/********************************

          Click Power

********************************/

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
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
        refreshPowerClick();
    } else {
        notEnoughCookiesError();
        // FOR DEBUGGING console.log("You don't have enough cookies!");
    }
})

/********************************

          Grandmas

********************************/

// Default values
let grandmaPower = 500;
let grandmaPriceAmount = 5000;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

// DOM declarations
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener("click", function () {
    let autoGrandmaStart = function () {
        let grandmaInt = window.setInterval(function () {
            cookieCount += grandmaPower;
            refreshCookieCount();
        }, 1000);
    }
    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount()

        //upgrade power level
        grandmaLevelNumber += 1
        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.337);
        //update grandma power
        grandmaPower += 10 * Math.floor(grandmaLevelNumber * 1.337);
        //turn autoGrandma on!
        autoGrandma = true;
        autoGrandmaStart();
        //refresh shop item
        refreshGrandma();
    } else {
        notEnoughCookiesError();
    }
})

/********************************

          Facilities

********************************/

//set default values
let facilityAuto = false;
let facilityPower = 20000;
let facilityPriceAmount = 400000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function () {
    let autoFacilityStart = function () {
        let facilityInt = window.setInterval(function () {
            cookieCount += facilityPower;
            refreshCookieCount();
        }, 1000);
    }
    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()
    
    //upgrade power level
    facilityLevelNumber += 1;
    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount);
    //update facility power
    facilityPower += 600 * Math.floor(facilityLevelNumber * 1.337);
    //turn autoFacility on!
    facilityAuto = true;
    autoFacilityStart();
    //refresh shop item
    refreshFacility();
    } else {
        notEnoughCookiesError();
    }
})

/********************************

          Automation

********************************/

//set default values
let facilityAutomation = false;
let facilityAutoPower = 2000000;
let facilityAutoPriceAmount = 40000000;
let facilityAutoLevelNumber = 0;

//declare DOM variables
let buyAutoFacility = document.getElementById('buy-automate');
let facilityAutoPrice = document.getElementById('automate-price');
let facilityAutoLevel = document.getElementById('automate-level');
let facilityAutoMultiple = document.getElementById('automate-multiple');

//buy a facility
buyAutoFacility.addEventListener("click", function () {
    let automatedFacilityStart = function () {
        let facilityAutoInt = window.setInterval(function () {
            cookieCount += facilityAutoPower;
            refreshCookieCount();
        }, 1000);
    }
    //make sure we have enough cookies
    if (cookieCount >= facilityAutoPriceAmount) {
        cookieCount -= facilityAutoPriceAmount;
        refreshCookieCount()
    
    //upgrade power level
    facilityAutoLevelNumber += 1;
    //update price
    facilityAutoPriceAmount = Math.floor(facilityAutoPriceAmount);
    //update facility power
    facilityAutoPower += 600 * Math.floor(facilityAutoLevelNumber * 1.337);
    //turn autoFacility on!
    facilityAutomation = true;
    automatedFacilityStart();
    //refresh shop item
    refreshAutoFacility();
    } else {
        notEnoughCookiesError();
    }
})