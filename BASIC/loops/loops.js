//  while loop 
// while loop is used for the execution of code or iteration of code defined times 


let num=1;
while(num<=3){
    console.log("This is while loop ")
    num++;   // iteration is very important so the execution of loop and avoid infinite loop
}

// do while loop 
 // in this loop the code is executed first and than the condition are checked after 
 // the initial iteration is executed and the condition is checked after 

 let num3 =1;
 do{
    console.log("This is do while loop ");
    num3++;

 }while (num3<=3) {
}


// for loop is advanced way to loop 
let age=45;
for(i=1;i<=age;i++){
    console.log(i);
}



// to print the table of 8 , 9 , 10 , 12 
let num1 =8;

for(i=1;i<=10;i++){
    num2=num1*i;
    console.log(num2);
}


// to check whether the year is leap year or not 
let year=2067;


    if(year%4===0 && year%100 != 0 || year%400===0){
        console.log("Year is a leap year ",year);
    } 
    else
    console.log("Year is not a leap year ",year);
   
// to create right angled triangle


var i,j;
for(i=1;i<=5;i++){
    line="";
    // console.log("\n");
    for(j=1;j<=i;j++){
        line+="*";
    }
    console.log(line);
}    /// we used line because the console.log print the * and than next line thats 
        // why we need it to be a string 


// #include<iostream>
// using namespace std ;
// int main(){
//     int i,j;
//     for(i=1;i<=5;i++){
//         for(j=1;j<=i;j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
// }