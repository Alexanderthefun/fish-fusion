const { boatInventory } = require("./fishingBoat.js")


// create a function that returns an empty Object.
// will need to filter through fishing boat inventory and purchase fish that have 
// at least 10 of that fish type in inventory AND with a price of $7.50 per fish or cheaper. 

// Will need to make a function that allows a chef to input their maximum budget for price 
// per fish. The function's output should only include fish who's properties match those specifications. 
// The output should also show that the fish's inventory has 10.

const mongerInv = boatInventory()

// let newMongerInv = () => {
//     let inv = {}
//     return inv
// };

// let newMongerInv = [];

const buyFish = (chefPrice) => {
    let newMongerInv = [];
    for (fish of mongerInv) {
        if (fish.amount >= 10 && fish.price <= chefPrice) {
            fish.amount = 10
            newMongerInv.push(fish)
        } 
    }
    return newMongerInv       
};

chefInv = buyFish(5.00);
console.log(chefInv);

module.exports = { chefInv };
