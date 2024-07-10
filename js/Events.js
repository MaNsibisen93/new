// let salary = 0;
// salary = Number(prompt("Enter Your Salary : "));

// if(salary!=0){
//      const screen =document.getElementById("screen")
//      const showSalary =document.createElement("h3")
//      showSalary.innerText=`Your entered salary is ${salary}`;
//      screen.appendChild(showSalary);

//      const Bonusbtn= document.getElementById("btn")
//      Bonusbtn.style.display="block";

//      Bonusbtn.onclick=()=>{
//         salary=salary+500;
//         showSalary.innerText=`Your updated salary is ${salary}`
//      }

// }



/********************password********* */

// const securityBox=document.querySelector(".screen");

// securityBox.onmouseover =()=>{
         
//    const key= prompt("enter the security key to access password");

//    if(key==="ABCD"){
//     alert("you can acces the password");
//     document.querySelector(".password").style.display="block";

//    }
//    else{
//     alert("wrong key");
//    }
// }

//**********Button**** */

// const button=document.querySelector("#btn");

// button.onclick=(obj)=>{
//     console.log("button click");
//     console.log(obj);
// }

// const button2=document.querySelector("#btn2");
// button2.ondblclick =(event)=>{
//     alert("clicked!!!!!!!!")
//     console.log(event);
// }



//**************************************    ONCHANGE EVENT********* */

// const screen=document.getElementById("screen")
// const input=document.getElementById("name")

// input.onchange =(e) =>{
//     console.log(e.target.value);
//     const data = document.getElementById("inputData");
//     data.innerText=e.target.value;
// }






// *******************\
//***********************************do funcrtion ik sath call nahi hote hai uske liy add event listner ka use kiya jata hai */

// const button= document.getElementById("btn");

//  button.onclick=()=>{
//     alert("hello");
//  }

//  button.onclick=()=>{
//     console.log("hiii");
//  }

// const button= document.getElementById("btn");


// button.addEventListener("click",()=>{
//         console.log("hello from function 1");
// });
// button.addEventListener("click",()=>{
//     console.log("hello from function 2")
// });
// button.addEventListener("click",()=>{
//     console.log("hello from function 3")
// });


// function handleClick(){
//     console.log("hello from function 4");
// }
// button.addEventListener("click",handleClick);

// button.removeEventListener("click", handleClick)



//**********************LIGHT TO DARK MODE(******************((((((()))))))) */


// const button= document.getElementById("btn");

// const body=document.querySelector("body");

// let currentMode="light";

// button.addEventListener("click",()=>{
//     if(currentMode==="light"){
//             currentMode="dark";
//             console.log(currentMode);
//             // body.style.backgroundColor="black";
//             body.classList.add("dark")
//             body.classList.remove("light")
//     }
//     else{
//         currentMode="light"
//         console.log(currentMode);
//         // body.style.backgroundColor="white";
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
// });


//////***************************form((((((((((((())))))))))))) */



// const formE1=document.querySelector("form");


// formE1.addEventListener("submit",(event)=>{
//            event.preventDefault();
//            console.log("form submit");
//            console.log(formE1.elements[0].value);
//            console.log(formE1.elements[1].value);
// });














