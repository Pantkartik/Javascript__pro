// two students have to find the sum of two number simultaneously 
 // importing prompt sync node doesnot have prompt 
let prompt=require('prompt-sync')();
// parameter setting 
let n=+prompt("Enter the number 1  :  ");
let n1=+prompt("Enter the number 2 : ");

// declaration of function 

function sum(a,b){
    sum=a+b;
    return sum;
}

// calling of function 

let sum1=sum(n,n1);
console.log(+sum1);