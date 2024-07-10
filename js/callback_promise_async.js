// console.log("1");
// setTimeout(()=>{
//        console.log("2");
//     },3000)  ///time in 3s
// console.log("3");

///***************************************************setTimeout and setInterval (asynchronous function)

// setTimeout(()=>{
//     console.log("hello");
// },3000)

//___________________________________________________insta

// console.log("template of story");

// setTimeout(() => {
//   console.log("data of story");
// }, 7000);
// console.log("template of body");
// setTimeout(() => {
//   console.log("data of body");
// }, 3000);
// console.log("template of footer");

//____________________________________________________setinterval

// setInterval(()=>{
//    console.log("jai shree ram");
// },3000)

//____________________________________________for unorderd list
// const food = document.getElementById("food")

// console.log("burger");

// setInterval(()=>{
//    const demand=document.createElement("li");
//    demand.innerText="bhook lagihai"

//    food.appendChild(demand);
// },2000)

// console.log("noodels");

///////////*************************************************________________________CALLBACK */

// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, fn, fn2) {
//   // console.log(fn);
//   // console.log(fn2);
// }

// calculator(
//   10,
//   30,
//   (a, b) => {
//     console.log(a + b);
//   },
//   (c, d) => {
//     console.log(c + d);
//   }
// );

//******************CALLBACK WITH EXAMPLE */

// function getData(dataId,getNextData){

//     setTimeout(()=>{
//         console.log("data for " , dataId);
//         if(getNextData){
//             getNextData();
//         }

//     },3000)

// }

// getData(1,getData(2))

//callback hell syntax x
// console.log("getting data1.....")
// getData(1,()=>{
//     console.log("getting data2.....")
//     getData(2,()=>{
//         console.log("getting data3.....")
//         getData(3,()=>{
//             console.log("getting data4.....")
//             getData(4)
//         })
//     });
// })

////__________________________________________PROMISES_____________

// const result=new Promise((resolve,result)=>{
//      console.log("hello i am a promise");
//     //  resolve("successfulls");
//     result("network issue");
// });
// console.log(result);

// function getData(dataId,getNextData){

//    return new Promise((resolve,result)=>{
//     setTimeout(()=>{
//         resolve("successfull");
//         console.log("data for " , dataId);
//         if(getNextData){
//             getNextData();
//         }

//     },3000)

//    })

// }
// let result=getData(1)
// console.log(result);

//////////////
// const serverReq=()=>{
//     return new Promise((resolve , result)=>{
//            console.log("i am a new request");
//            resolve("data sent")
//         //    result("please check the connection")
//     })
// }

// let promise=serverReq();

// promise.then(()=>{ ////agr data aagya hai
//     console.log("rendering the data in front-end");
// })

// promise.catch(()=>{
//     console.log("data can not be show");
// })

//////////////////////////***********________________________PROMISE CHAINING
////_________SECUROITY AND SCALABILITY HIGH BUT SYNTANX IS NOT BETTER

// function getData(dataId){

//        return new Promise((resolve,result)=>{
//         setTimeout(()=>{
//             // resolve("successfull");
//             result("network issue!!!!!!!!")
//             console.log("data for " , dataId);
//         },3000)

//        })

//     }

//     console.log("getting data 1.............");
//     getData(1).then(()=>{
//         console.log("getting data 2............");
//         getData(2).then(()=>{
//             console.log("getting data 3...........");
//             getData(3).then(()=>{
//                 console.log("getting data 4.............");
//                 getData(4)
//             });
//         });
//     });

//    .catch((reject)=>{
//     console.log(reject);
//    })

/////////////////////__________________________________________________ASYNC Wait

// console.log("1");
//    async function hello (){
//     console.log("hello");
//    }

//    let result=hello();
//    console.log(result);
//    console.log(2);

//..........................

async function apidehli() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data of delhi");
      resolve("donee!!!!!!!");
    }, 2000);
  });
}

async function apipune() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data of oune");
      resolve("donee!!!!!!!");
    }, 2000);
  });
}

async function getWheatherData() {
  const dehli = await apidehli();
  console.log(dehli);
  const pune = await apipune();
  console.log(pune);
}
getWheatherData();
