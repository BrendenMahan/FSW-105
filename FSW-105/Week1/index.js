var cart = {
    item: "grocery cart",
    height: "33 inches",
    weight: "40 lbs",
    holds: ["milk", "chips", "dr.pepper", "meat", "fruit", "ECT."],
    displayInfo: function() {
        console.log(`${cart.item} is ${cart.height} and weighs ${cart.weight} and can hold: ` + this.holds);
    }

}
cart.displayInfo();