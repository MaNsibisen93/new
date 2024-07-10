
// console.log("Welcome to js")
// console.log(100);
// console.log(true);

// console.log("Pankaj");


// let first_Name="Pankaj";
// let salary=250;

// data type -> mukt


// console.log(first_Name)
// console.log(salary)



//****************************************rules to write a variable name
// 1-> camel casing
// 2-> spacing not allowed
//3-> last_Name
// 4-> starting word number or special character
// 5-> keyword 
// 6-> Variable ->uppercase -> PI->3.14
// variable -> SALARY -> 10000
// 7-> logical


//Data types -> 
// primitive                  non primitive
// 1-> Number                   Arrays
//2->strings                    objects
// 3-> boolean
//4->undefined
//5-> null

// let age=22;
// console.log(age)


// let full_Name="Choota bheem"
// console.log(full_Name)

// let job=true;
// console.log(job)

// let marks
// console.log(marks)

// let bankBalance=null;
// console.log(bankBalance)


//******************************javascript dynamically typed Language. */ 

// let name1="Pankaj";

// console.log(name1);

// name1=123;

// console.log(name1)

// comments

//*******************************************type conversion   operator ->typeof()


// console.log(typeof(12))

// console.log(typeof("pankaj"))

// console.log(typeof('A'))

// console.log(typeof(undefined))

// console.log(typeof(true))

// console.log(typeof(null)) //bug




// let const var 

// let age=10;

// console.log(age);

// age=18;

// console.log(age);


// const birthYear=2001;

// console.log(birthYear)



// var personality="boring";

// console.log(personality)

// var personality="extrovert"

// console.log(personality)



//operators

// mathematically + - * / %  **

// const currentYear=2024

// let age=currentYear-2001;

// let age1=currentYear-1990;

// console.log(age,age1)

// console.log(age*2,age/2)


// console.log(5 ** 3);


// + operator -> overloaded -> add -> cont

// const firstName="Champa"
// const lastName="chameli"

// console.log(firstName +' ' + lastName)

// Assignment = +=,-=,/=,%=,*=

// let num1=20;
// let num2=2;
// let name="Pankaj";
// console.log(name);


// console.log(num1+=num2)
// console.log(num1-=num2)
// console.log(num1*=num2)
// console.log(num1/=num2)
// console.log(num1%=num2)


// comparison

// let age1=20;
// let age2=20;

// console.log(age1>=age2)
// console.log(age1<=age2)
// let currentYear=2024

// console.log(currentYear+=10 < (currentYear+=25))
//                           10   <   2049
//               currentYear+= true


// const markHeight=1.69
// const markWeight=78

// const johnHeight=1.95
// const johnWeight=150

// const JohnBmi=johnWeight/(johnHeight**2)

// const MarkBmi=markWeight/(markHeight**2)


// console.log("Bmi of john is " + JohnBmi + " and Bmi of mark is " + MarkBmi);

// const markHigherBmi=MarkBmi>JohnBmi;

// console.log(markHigherBmi);


//strings and string templates

// const name1="Aman";
// const job="manager";

// const birthYear=2000;
// const currYear=2024;

// const age=(currYear-birthYear);
// console.log(age)

// const information="I am " + name1 + "\n my job title is" + job + " and my age is " + (currYear-birthYear)

// console.log(information);


// // string templates -> ES6

// // templates litrals ``
// const info=`I am ${name1} 
// my job title is ${job} and my age is ${(currYear-birthYear)}`;

// console.log(info)

// let age=prompt("Enter your age");

// if(age>=18){
//     console.log("jaa vote dee")
// }
// else{
//     console.log("mera bacha hai tu!!")


// }


// let age=prompt("Enter your age");
// let eyesight=false;
// if(age>=18 && eyesight){
//     console.log("You can drive!!!!")
// }
// else{
//     const yearsLeft=`Wait for next ${18-age} years`
//     console.log(yearsLeft)
// }

//************type conversion type coersion**********************//

// let salary=Number(prompt("enter your slary"));
//  let updatedsalary=Number(salary);
//  let bonus=1000;

//  console.log(bonus);
//  console.log(updatedsalary+bonus);
//  console.log(salary+bonus);


 //********************truthyyy & falssyyyy value********************///

//  falsy value 0 , " " ,undefined , null , NaN

// let email;
//  if(email){
//     console.log(email);

//  }
//  else{
//     console.log("enter your email");
//  }


//  console.log(Boolean(0));
//  console.log(Boolean( ) );
//  console.log(Boolean(undefined));
//  console.log(Boolean(null));
//  console.log(Boolean(NaN));

 
//  let height=Number(prompt("enter youe height"));   //// jab number me convert nhi karenge tab 0 value ldalne apar wo false return karega
//   console.log(height);

//   if (height){
  //   console.log(`yur enterd height id ${height} in cm`);
  // }
  // else{
  //   console.log("enter yur height");
  // }

  //****************== & === ******************/

// //   == is only comparre but === is compare with its your data type basically its strict type


// boolean operator And Or Not  &&   ||  !
// const hasDrivinglicence = true;
// const goodVision = true;


//  if(hasDrivinglicence&& goodVision){
//   console.log("oky u can drive");
//  } else{
//   console.log("no");

//  }

///*************ACTIVITY QUESTION******************** */

  // let dolphinsScore1=96;
  // let dolphinsScore2=108;
  // let dolphinsScore3=89;

  // avgOfDolphinsScore=(dolphinsScore1+dolphinsScore2+dolphinsScore3)/3
  // console.log(avgOfDolphinsScore);

  // let kolasScore1=88;
  // let kolasScore2=91;
  // let kolasScore3=110;

  // avgOfkolasScore=(kolasScore1+kolasScore2+kolasScore3)/3
  // console.log(avgOfkolasScore);
  // if(avgOfDolphinsScore>100 && avgOfDolphinsScore>avgOfkolasScore){
     
  //   console.log("dolphins win");
  // }
  // else if(avgOfkolasScore>100 && avgOfDolphinsScore<avgOfkolasScore){
  //    console.log("kolas win");
  // }
  // else if(avgOfDolphinsScore==avgOfkolasScore && avgOfDolphinsScore>100 && avgOfkolasScore>100){
  //      console.log("drow");
  // }
  // else{
  //   console.log("there is no win");
  // }
  

  // //**************Swith case *******************/
  //  let day=prompt("enter the day");
  // switch(day){
     
  //   case "monday":
  //     console.log("leg day");
  //     break;
  //   case "tuesday":
  //     console.log("cheast day");
  //     break;
  //   case "wednesday":
  //   case "thursday":
  //      console.log("rest");
  //      break;
  //   case "friday":
  //     console.log("push day");
  //     break;
  //   case "saturday":
  //     console.log("pull day");
  //     break;
  //   case "sunday":
  //     console.log("chutti");
  //     break;
  //   default:
  //     console.log("re enter your day");
  //}
      

  //*******************Statement and expression**************/
//expression  -> value genrate  in a single line of code

// Statement is collection of logics


let j=11;
let i=(--(j++));
console.log(i);








