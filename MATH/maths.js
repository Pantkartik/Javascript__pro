// Math doesnot work with the BigInt 


//  Math.Pi
// RETURN THE VALUE 3.14


let n= Math.PI;
console.log(n);





//  Basic opaerations  
let x=40.5;
console.log(Math.abs(x))   // return absolute value  means how far is the number from 0

console.log(Math.round(x))    // rounds off the number   // return 41

console.log(Math.floor(x))   // rounds off the number to the number before decimal    // return 40

console.log(Math.ceil(x))   // rounds off the number to the number+1 before decimal   // return 41

console.log(Math.trunc(x))  // return the integer part of x

//  to generate the random number 

let z=(Math.random()*100).toFixed(0);
console.log(z);



let t=(Math.random()*100).toFixed(3);
console.log(t);