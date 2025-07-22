// The search methods of string are same as the array

let str="kartik"
//  1 . search by index 
console.log(str.indexOf('a'));  // its is to find the index of character in string



//  to find the last index of the character 
console.log(str.lastIndexOf('k'));   // this wil give the index of 'k' at the End which is 5


/* To convert the string into the array  */

    // string ------> array 
let str3="MANGO";
//  we use the  Array.from(string_name )
console.log(Array.from(str3));