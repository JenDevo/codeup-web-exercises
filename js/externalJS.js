"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my website!");
var favColor = prompt ("What is your favorite color?");
alert (favColor + " is my favorite color too!");

//Exercise 1
var mermaid = prompt("How many days would you like to rent The Little Mermaid?")
    alert("Great! You will have The Little Mermaid for " + mermaid +" days.");

var bear = prompt("How many days would you like to rent Brother Bear?")
    alert("Great! You will have Brother Bear for " + bear + " days.");

var hercules = prompt("How many days would you like to rent Hercules?");
    alert("Great! You will have Hercules for " + hercules + " days.");

    var mermaidCost = mermaid * 3
    var bearCost = bear * 3
    var herculesCost = hercules * 3
    var movieTotal = mermaidCost + bearCost + herculesCost;

alert("Movies are $3.00 each per day. Your total is " + movieTotal);

//Exercise 2
var amazonPay = 380 * 4
var facebookPay = 350 * 10
var googlePay = 400 * 4
var totalPayCheck = amazonPay + facebookPay + googlePay;
alert("You work for Amazon for 4 days for $380 per hour. You earned $" + amazonPay)
alert("You worked for Facebook for 10 days for $350 per hour. You earned $" + facebookPay)
alert("You worked for Google for 4 days earning $400 per hour. You earned $" + googlePay)
alert("Wow! You've made a total of $" + totalPayCheck + "!");

//Exercise 3
var totalClass = prompt("How many students can be in the class?");
var currentSize = prompt("How many students are currently enrolled?");
var classConflict = confirm("The class is Monday, Wednesday, and Friday from 3:00-4:00 PM. Will this work with your current schedule?");
var canEnroll = ((totalClass > currentSize) && classConflict)
alert("Yay! You have officially been enrolled!");

//Exercise 4
var premiumMember = confirm("Are you a premium member");
var validOffer = confirm("Is this offer still valid?");
var amountOfItems = prompt("How many items did you purchase?");
var discountQualified = validOffer && (amountOfItems > 2 || premiumMember);
alert("Offer for discount " + discountQualified + "!");

//The code below was written before the exercises were completed above (when instructor was demonstrating).
//Alert - How open a window to show my user some information?
alert("My name is Mr.Mac");

//Confirm - true or false? [ok and cancel]

var likedLunch = confirm("How was your lunch");

alert("You told me that it was " + likedLunch + " that you liked lunch");

//Prompt - can you write something in response to what I asked in the window?

var whatDidYouHaveForLunch =
    prompt ("Hey I know it was " + likedLunch + " that you liked but what did you have?");

    alert ("You told me you had " + whatDidYouHaveForLunch + " for lunch");