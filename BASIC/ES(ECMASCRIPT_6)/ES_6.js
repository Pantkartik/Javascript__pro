// ecma script or ES 6 included many features 


// 1. let 
// 2. const 
// 3 . Arrow fucntion 

// let is used for the declaration of variable 
// it has universal scope inspite to the {}
// and let also can be redefined 

// const is used for the declaration of variable whose values doesnot change

//  Template literals or template strings 
// its a way to write a data 

let firstName ='kartik';
let lastName = 'pant';
console.log(`${firstName} ${lastName}`);


//  string interpolation 
//  it is also a way to write a data using template literals 
let age =16;
let message =`I am ${age} years old `;
console.log(message );



//  Arrow function 
const sum = function( a, b ){
    let result = `The sum of ${a} and ${b} is ${a+b}`;
        console.log(result);

} 
sum(5,10);        // this is the traditionl method to declare a function 



// using fat arrow function 
const sum1 =(a,b) => {
              let result = `The sum of ${a} and ${b} is ${a+b}`;
        console.log(result);

};

sum1(5,10);



// lets use the fat arrow function to make a fucntion to find the sum of two numbers 


const add =(a,b)=>{
   let add1= a+b;
    console.log(add1);
}
add(5,4);