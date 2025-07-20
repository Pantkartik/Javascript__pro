var num = 56
var str = " kartik "  // this is the string 
var bool = true   // BOOLEAN
var symbool
var NUM=BigInt(35629891)
console.log(num)
console.log(bool)
console.log(NUM )



// TO CONVERT STRING TO NUMBER 
var str="10";
console.log(typeof Number(str));
console.log(typeof +str);  // we have added + before the variable name
                           // this converts the string to number



// USING parseInt to convert string to number
console.log(typeof parseInt(str));
 
// USING parseInt to convert string to float
console.log(typeof parseInt(str));


// TO CONVERT THE NUMBER TO STRING 
var string=56;
console.log(typeof String(string));  
console.log(typeof (string+" ")); // we have to add the empty string after the string name



// Type coersion  

// it automatically converts the datatype of the value 
let num = '5'+52;   // this will give 552 
                    // because of '5' string and 52 number so concat 
console.log(num);
num = '5'-10;
console.log(num);   // this will give -5 because of convertion of '5' to number 
