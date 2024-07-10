//***************************SELECTOR******************* */
// const firstHeading=document.getElementById("heading-1") 
// console.log(firstHeading);

// firstHeading.style.color="orange";

//***************class name */
// const secondHeading=document.getElementsByClassName("h2")
// console.log(secondHeading);

// const allText=document.getElementsByClassName("text")
// console.log(allText);
// for(let text of allText){
//          text.style.color="blue"
//      }
    

///******************By tag name */

// const allTag=document.getElementsByTagName("h1")
// console.log(allTag);

// for(let heading of allTag){
//     heading.style.color="blue"
// }



// const id=document.querySelector("#heading-1")
// console.log(id);

// const element2=document.querySelector(".h2");
// console.log(element2);



//***********************PROPERTIES TO CHANGE OF STRUCTURE OF  HTML********** */

// const element = document.querySelector("p");
// console.log(element.innerText);  ///(text with styling)html me style ki property ko lekr disply karwata hai
// console.log(element.textContent);//text without styling 
// console.log(element.innerHTML);//it bring tags alongside





/////////*******************************change inner text************ */\

// const heading= document.querySelector("h1");

// heading.innerText="hello js coders"

// const name1=prompt("enter your name");

// const element=document.querySelector("h1")

// element.innerText="hello " +name1

// if(name1){
//     const greeting =document.querySelector("p");
//     greeting.innerText="hn jii kya sewa kii jay";
// }


let element=document.querySelector("a");
// console.log(element.getAttribute('href'));

element.setAttribute('href' ,'https://www.youtube.com/')


// arr=['https://images.unsplash.com/photo-1716968921500-6bce26915c37?q=80&w=1446&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1716396484354-e90091645e0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1716881139357-ddcb2f52940c?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

// const image=document.querySelector("img");

// let index=0;

// setInterval(()=>{
// image.setAttribute('src',arr[index]);
// index=(index+1)% arr.length
// },2000)




//**************************ADDING ELEMENT TO DOM*********** */

const container=document.getElementById("section")
const heading=document.createElement("h1");
heading.innerText="hello codres"
container.appendChild(heading);


