///laxical scope = means parent function ki property child execute karta hai



let greetings = "namste!!!!!!!!!!";
function sumFunc() {
  let userName = "mansi";

  function printName() {
    console.log(userName);
  }
  printName()
} 

sumFunc();



//_______________closure
//________closure me agr parent exicst nhi karta ya kill ho jata hai  to bhi parent apni sari property child ko de dega or child sari property excecute hogi 

let greeting = "namste!!!!!!!!!!";
function sumFunc() {
  let userName = "mansi";

  function printName() {
    console.log(userName);
  }
  return printName;  /// parent kill but give the property to the child (printName)
}

let result = sumFunc();
result();
console.log(greeting);

