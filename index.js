/******************************************************************
 *
 *  LEARNING FUZE MOCK TECHNICAL INTERVIEW:
 *  COIN CHANGE PROBLEM
 *
 *  Given an amount (in cents), write a function that returns    
 *  the minimum number of coins needed and specifies which coins.
 *                                                               
 *  To begin, we'll default to US coin denominations                       
 *  (pennies, nickels, dimes, and quarters).                     
 *
 *  NOTES & TIPS:
 *  - Please disable Co-Pilot or any AI autocomplete before starting.
 *  - Think out loud and ask questions! Speak to trade-offs.
 *  - Feel free to look up documentation, syntax...
 *  - Or use psuedo-code if it helps demonstrate your thinking.
 *
 *  To run this file in your terminal:
 *  node index.js
 *
******************************************************************/

const US_COINS = [25, 10, 5, 1];

let amountCents;
let numberOfCoins;
let coinsNeeded;

function coinChange(amountCents, coins = US_COINS) {

}



/****************
 *
 *  START HERE:
 *  TEST CASE 1
 *
****************/
// amountCents = 33
// coinChange(33);
// console.log(`For ${amountCents} cents: ${numberOfCoins} needed (${coinsNeeded})`);

/****************
 *
 *  NEXT:
 *  TEST CASE 2
 *
****************/
// amountCents = 11
// coinChange(11);
// console.log(`For ${amountCents} cents: ${numberOfCoins} needed (${coinsNeeded})`);

/****************
 *
 *  ONLY IF TIME PERMITTING:
 *  TEST CASE 3
 *
****************/
// amountCents = 11
// coinChange(11, [9, 6, 5, 1]);
// console.log(`For ${amountCents} cents: ${numberOfCoins} needed (${coinsNeeded})`);