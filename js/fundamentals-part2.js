// //JS-> looslely type language  -> strictaction nhi hote hai
// //js -> env-> browserr
// //'use strict'  // is use to find the error and detect all code // strict kar deta hai

// let drivingLicence = false;
// let passTest = true;

// if(passTest){
//     drivingLicence=true;
// }
// if(drivingLicence){
//     console.log("you can drive");
// }
// else{
//     console.log("you can'not  drive");
// }

///********************************js Function-> REUSE****************************//


// function logger(){
//     let message ="hello";
//     return message;   ///block scope
// }
// const output =logger(); 
// console.log(output); //global scope

// //1.parameters ko receive 
// // 2. output return


// function fruitJuicer(apples, oranges){

//     console.log(`${apples} and ${oranges}`);
//     const juice =`juice with ${apples} apples ans ${oranges} oranges`
//     return juice;
// }
// const glass=fruitJuicer(2,3);  ///arguments
// console.log(glass);
// console.log(fruitJuicer(4,5));  







// ///****************function declration vs function expresion ***********/

// //function call function ke bad or pehle dono jagah se call ho jayga
// function calAge1(birthYear){
//       return 2024-birthYear;
// }

// console.log(calAge1(2004));


// // expressiom
// // function call function ke bad call ho jayga , pehle nahi hoga   hoisting ki wajah se
// // anonouss function
// const calAge2=function(birthYear){
//     return 2024-birthYear;
// }
// console.log(calAge2(2004));



// const juice = function (apples , oranges){
//     const juice =`juice with ${apples} apples ans ${oranges} oranges`;
//     return juice;
// }

// let glass = juice(2,3);
// console.log(glass);







// ///*********************FUNCTION EXPRESSION VS ARROW FUNCTION***************************/

// arrow fn / callback fn / single line function

// const  calage3 = birthYear=>2024-birthYear;

// console.log(calage3(2004));


// const Retiremenrt = (birthYear,name)=>{
//     let age =2024-birthYear;
//     let remainingYearToRetire=65-age;
//     return `${name} your age is ${age} and years to retire ${remainingYearToRetire}`;
  

// }
// console.log(Retiremenrt(2004 , "mansi"));

// // SYNTAX  const example =()=>{}






// /////FUNCTION CALLING INSIDE  A FUNCTION => HIGHER ORDER FUNCTION

// function cutPieces(fruits){
//   return fruits*4;

// }

//  function fruitJuicer(apples, oranges){
//        const applesPieces = cutPieces(apples);
//        const orangesPieces = cutPieces(oranges);
//         const juice =`juice with ${applesPieces} apples ans ${orangesPieces} oranges`
//         return juice;
//     }
//     const glass=fruitJuicer(2,3); 
//     console.log(glass);






// ///****************practice************** */


//     function calAverg(score1 , score2 , score3){
//           return (score1 + score2 + score3)/3
          
//     }
//     let avgOfTeam1=calAverg(44, 23,71);
//     let avgOfTeam2=calAverg(65, 54, 49)
    
    
//     function checkWinner(team1, team2){
//             if (team1>(team2*2)){
//                 console.log(`team 1 wins`);
//             }
//             else if (team2>(team1*2)){
//                 console.log(`team2 wins`);
//             }
//             else{
//                 console.log("no one wins");
//             }
//     }
//     checkWinner(avgOfTeam1,avgOfTeam2);




//***********************array-> first data structure***********************/



// const friends =["mansi","jyoti","aanchal"]
// console.log(friends);
// console.log(friends[2]);

// // jab ik array ko function me likhna hai tab 

// const birthYear= new Array(2005,2004,2006,2007)
// console.log(birthYear);    //random access using index



// /// Array  -> inbuilt method

// const friend=["mansi","jyoti","aanchal","devi","mannu"]
// console.log(friend.length)

// ////index

// console.log("total index are",friend.length-1);

// ///change the value /// mutable


// friend[3]="ganga"
// console.log(friend);


// ////heterogenous

// let arr=["mansi", 26,"age",(2024-2004),friend]
// console.log(arr);
// console.log(arr[4][2]);



////**************practice************** */

// arr=[2001,2004,2009]

//  const calAge=function(birthYear){
//          return 2024-birthYear;
// }
// const age1=calAge(arr[0])
// const age2=calAge(arr[1])
// const age3=calAge(arr[2])
// const ages=[age1,age2,age3]

// console.log(ages);




//*******************Array methods******** */


//************************push*************** */

//  const friend=["mansi","jyoti","aanchal","mannu"]

//  let dost =prompt("enter your new frd");

//  const newLength = friend.push(dost);
//  console.log(newLength);
//  console.log(friend);
 


//  friend.unshift(dost);

//  console.log(friend);


 ///***********************pop******************** */

//  const friend=["mansi","jyoti","aanchal","mannu"]

 

//  const removedItem = friend.pop();
//  console.log(removedItem);
//  console.log(friend);
 


//  const removedFromStary =friend.shift();

//  console.log(friend);




///***********************************index value******** */

// const friend=["mansi","jyoti","aanchal","mannu"]

// console.log(friend.indexOf("mansi"));     ///for index value 

// console.log(friend.includes("mansi"));   /// value present or not 





///*******************************practice question ***************** */


// pay=[125,555,44]

// const calcTips=function(bills){
//       return bills>=50 && bills<=300?  bills*0.15 : bills*0.20;

// }
// const tip =[calcTips(pay[0]),calcTips(pay[1]),calcTips(pay[2])]

// const totalBill=[pay[0]+tip[0],
//                 pay[1]+tip[1],
//                 pay[2]+tip[2]]
//                 console.log();

//  console.log(totalBill);




///**********************************ojects  -> key :value***************/
'use-strict'
// let student={
//     firstName:"Mansi",
//     lastName:"bisen",
//     age:23,
//     rollno:60
// }
// console.log(student);
// console.log(student.rollno);

// console.log(student);
// console.log("hehehe");

// *********************************************dot vs bracket

// console.log(student.firstName);
// const Namekey="Name";
// console.log(student['last' + Namekey]);

// let inputKey=prompt("enter your key");

// console.log(student.inputKey);   //undefined

// console.log(student[inputKey]); ///expression


////********************if else in object */

// let personInfo={
//     firstName:"Mansi",
//     lastName:"bisen",
//     age:23,
//     salary:500000,
//     jobStatus:true
// }
// const interestedIn=prompt("enter the info u want")
//   if (personInfo[interestedIn]){
//     console.log(personInfo[interestedIn]);
//   }
//   else{
//     console.log("wrong request");
//   }


  //***********************new value add in your object */

// personInfo.location="bhopal";
// personInfo.instaId="mAnsi.hm"
// console.log(personInfo);


// let key =prompt("enter a key ")

// // personInfo.married="true"

// // console.log(personInfo);

// if (personInfo[key]){
//       console.log(personInfo[key]);
// }

// else{
//     personInfo[key]=prompt("enter the value");
//     console.log(personInfo);
// }








////****************loops in javascript*************/

//for , while , do while

///.find even number

// for (let i=1; i<=20 ; i++ ){
//   if(i%2==0){
//     console.log(i);
//   }
// }


//while loop

// let user1=25;
// let user2;
// let attempts;
// while (true){
//   user2=Number(prompt("enter your guess value"));
//   attempts++;
//   if(user2>user1){
//     console.log("enter value is greater");
//   }
//   else if(user2<user1){
//     console.log("enterd value is lesser");
//   }
//   else{
//     console.log("congo!!!!!!!!!");
//     break;
//   }
// }
// console.log("total attempts" , attempts);


/**************************do while loop*/
 
// let kmai =0;
// let customerStatus;
// do{
//   kmai+=50;
//   customerStatus=prompt("enter customer status yes/no")
// }
// while(customerStatus=='yes')
// console.log("aaj ki kamai ",kmai);


//************************for of , for in , for each*/

//******for of  -> Strings , Array

// let str="JavaScript";
// let size=0;
// for(let val of str){
//   console.log(val);
//   size++;
// }
// console.log("size of your string", size);

//******for in   -> ojects

// let student={
//   name:"mansi",
//   age:20,
//   cgpa:7.87,
//   isPass:true,
// }

// for (let key in student){
//   console.log(key+": "+student[key]);
// }


let sampleData=[
  {age:23,name:"mansi"},
  {age:73,name:"tashi"},
  {age:73,name:"mani"},
];

sampleData.forEach((student)=>{
  console.log(student);
})