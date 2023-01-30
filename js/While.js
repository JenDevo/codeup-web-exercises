"use strict";
//While Loop
let i = 2;
while (i <= 65536){
    console.log(i);
    i*=2;
}

//Do-While Loop
//generate random number between 50 and 100
//generate random number between 1 and 5
//create do while loop to log to console amt of cones sold to each person.
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("The ice cream seller must sell a total of " + allCones + " cones today.");

do{
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought <= allCones){
        console.log("Sold: " + conesBought + ". Only " + (allCones -= conesBought) + " left!");
    } else {
        console.log("Oh no! I do not have enough to sell you " + conesBought + " cones. I only have " + allCones + " left.");
    }
} while (allCones > 0);

if(allCones === 0){
    console.log("Yay! Sold them all!")
}
