//  to perform the insert,add replace delete   ( crud ) in array we use methods


// 1. TO ADD ELEMENTS AT THE END 
  
let arr=[5,6,7,8,3,3];
 

 // if we want to add element 10 we use push ()
 arr.push(10);   // add 10 at the end 
 console.log(arr);


// 2. TO DELETE LAST  ELEMENT FROM THE ARRAY
 
// if we want to delete 10 from the end we use pop()

arr.pop(10);
console.log(arr);

// 3. TO ADD ONE OR MORE ELEMENT AT THE STARTING 

// if we want to add 10 at the starting we use unshift()
arr.unshift(10);
console.log(arr);

// 4. TO REMOVE THE FIRST ELEMENT OF ARRAY

// if we want to remove the 10 from starting we use shift()
arr.shift(10);
console.log(arr);



//  if we want to delete anywhere in the array


arr.splice(1,1);
console.log(arr);   // this will give 5,7,8,3,3  // deleted the 6