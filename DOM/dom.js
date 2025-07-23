// // creating a tag using js
// const para=document.createElement("p");
// para.innerText ="hello world";
// document.body.appendChild(para); // this show the change in browser



// // // now creating again an element using js 
// // const button=document.createElement("button");
// // button.innerText="Click Me !";
// // button.style.backgroundColor='black';
// // button.style.color='white';
// // button.style.borderRadius='6px';
// // button.style.cursor='pointer';
// // button.addEventListener("click",()=>{
// //     alert('button clicked !');
// // });
// // document.body.appendChild(button);



// const button=document.createElement('button');
// button.innerText='Dabao bhaiya';
// button.style.backgroundColor="red";
// button.style.color="white";
// button.style.borderRadius="10px";


// //  adding fucntionality in button
// button.addEventListener("click",()=>{
//     document.body.style.backgroundColor="black";
// })
// document.body.appendChild(button);

// const button1=document.createElement('button');
// button1.innerText='Dabao bhaiya';
// button1.style.backgroundColor="red";
// button1.style.color="white";
// button1.style.borderRadius="10px";
// button1.style.margin="10px";


// //  adding fucntionality in button
// button1.addEventListener("click",()=>{
//     document.body.style.backgroundColor="white";
// })


// document.body.appendChild(button1);



/////////////////////////////////////////////////////////
// creating a color changing background changing button

// const to_black=document.createElement("button");
// to_black.innerText="Black !";
// to_black.style.margin="50px";
// to_black.style.height="200px";
// to_black.style.width="200px";
// to_black.style.border="none";
// to_black.style.borderRadius="10px";
// to_black.style.backgroundColor="lightblue";
// to_black.style.color="black";
// to_black.style.fontSize="35px";
// to_black.style.fontFamily="ae";

// const to_white=document.createElement("button");
// to_white.innerText="White !";
// to_white.style.margin="50px";
// to_white.style.height="200px";
// to_white.style.width="200px";
// to_white.style.border="none";
// to_white.style.borderRadius="10px";
// to_white.style.backgroundColor="lightblue";
// to_white.style.color="black";
// to_white.style.fontSize="35px";
// to_white.style.fontFamily="ae";



// to_white.addEventListener("click",()=>{
//     document.body.style.backgroundColor="white";
//     to_white.style.color="white";
//     to_white.style.backgroundColor="grey";
//      to_white.style.border="none";
//      to_white.style.borderRadius="50px";
//      });




// to_black.addEventListener("click",()=>{
//     document.body.style.backgroundColor="black";
//     to_black.style.color="white";
//     to_black.style.backgroundColor="grey";
//      to_black.style.border="none";
//      to_black.style.borderRadius="50px";

// });

// document.body.appendChild(to_black);
// document.body.appendChild(to_white);



let traf=String("Enter the Traffic instructions ");
if(traf==="GO"){

}
else if(traf==="WAIT"){

}
else if(traf==="STOP"){
red_light.addEventListener("mouseover",()=>{
})
}
// lets create a traffic light 
const red_light=document.createElement('button');
red_light.style.height='100px';
red_light.style.width='100px';
red_light.style.display='flex';
red_light.style.marginLeft='50%';
red_light.style.marginTop='5%';



// red_light.style.spaceEvenly='center';
red_light.style.borderRadius='100%';
red_light.style.borderWidth='8px';
red_light.style.backgroundColor='grey';

red_light.addEventListener("mouseover",()=>{
red_light.style.backgroundColor='red';

  
})









document.body.appendChild(red_light);






















































// // console.log(document.body.childNodes);

// // const { createElement } = require("react");

// //  



// // ///// accesing the element by using getelementbyid()
// // let a = document.getElementById("first");
// // let b= document.getElementById("second");
// // console.log(a);
// // console.log(b);


// // using query selector
// let c = document.querySelector(".first");
// // let parent;
// console.log(c);


// // for updating the code 

// // 1. using innerHTML 
// // 2. using outterHTML
// // 3. using text-content
// // 4. using inneText



// //  creating a button using js and modifying it 



// let button=document.createElement("button");
// // console.log(button);
// //  now inserting the data inside the button
// // document.button.innerHTML("<p>hello world <\p>");