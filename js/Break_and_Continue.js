"use strict";
let numPicked;

while(true) {
    numPicked = prompt("Enter an odd number between 1 and 50.");
    if (numPicked % 2 !== 0 && numPicked >= 1 && numPicked <= 50) {
        break;
    }
    alert('Whoops! Please enter a number that is both odd and between 1 and 50.');
}
    console.log("Number to skip is: " + numPicked);

for (let i = 1; i <= 50; i++){
    if(i % 2 !==0){
        if(i === Number(numPicked)){
            console.log("Whoops! Skipping " + i);
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}