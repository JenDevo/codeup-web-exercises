"use strict";
//While Loop
// let i = 2;
// while (i <= 65536){
//     console.log(i);
//     i*=2;
// }

//Do-While Loop
//generate random number between 50 and 100
//generate random number between 1 and 5
//create do while loop to log to console amt of cones sold to each person.

// This is how you get a random number between 50 and 100

do{
    var allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    var customerPurchase = Math.floor(Math.random() * 5) + 1;
    console.log("The ice cream seller must sell a total of " + allCones + " cones today.");

    if(customerPurchase < allCones){
        console.log(customerPurchase + " sold");
        continue;
    } else if (customerPurchase > allCones){
        console.log("Oh no! I do not have enough cones to sell you " + customerPurchase + "cones. I only have " + allCones + "left.");
        continue;
    } else if (customerPurchase === allCones){
        console.log("Yay! I sold them all!");
        break;
    }
    ++allCones;
} while (allCones > 50);
