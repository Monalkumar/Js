// document.querySelector("#main-component1").addEventListener("click",()=>{
//     console.log("main-component1")
// })

// document.querySelector("#main-component2").addEventListener("click",()=>{
//     console.log("main-component2")
// })
// document.querySelector("#main-component3").addEventListener("click",(e)=>{
//     console.log("main-component3");
// }, )

// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateWallet();
// these are apis which are dependent to each other we do it using call back function
// const cart = [ "shoes", "shirts", "paints", "watch", "trousers", "laptops", "mobiles"]

// api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//         api.showorderSummary(function(){
//             api.updateWallet()
//         })
//     })
// })

// const myPromise = new Promise((resolve, reject) => {
//     const success = true; // Change this to false to simulate failure

//     if (success) {
//       resolve("Operation was successful!"); // Resolve the promise with a success message
//     } else {
//       reject("Something went wrong."); // Reject the promise with an error message
//     }
//   });

//   // Using the promise
//   myPromise
//     .then((message) => {
//       console.log(message); // This will run if the promise is resolved
//     })
//     .catch((error) => {
//       console.error(error); // This will run if the promise is rejected
//     });

// const myPromise= new Promise((resolve, reject)=>{
//     const success = true;

//     if(success){
//         resolve("data fetch successfully")
//     }
//     else{
//         reject("data need to fetch and will do easily")
//     }
// })

// myPromise.then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })

// var x = 100

// const x = 10
// function getName(){
//     console.log("hello world")
// }
// getName()
// console.log(x)
// console.log(getName)

// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateWallet();

// const cart = ["shoes", "pants", "laptops", "pen", "book"];

// api.createOrder(cart, () => {
//   proceedToPayment(() => {
//     api.showOrderSummary(() => {
//       api.updateWallet();
//     });
//   });
// });
// console.log(cart)

// console.log(a);
// let a = 100;
// var b = 101;

// const cart = ["apple", "mango", "banana", "pants","shoes", "laptops"]

// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateWallet();

// api.createorder(cart,function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet()
//         });
//     })
// } );

// const GET_API =  "https://jsonplaceholder.typicode.com/users"

// const user = fetch(GET_API)

// console.log(user)

// user.then(function(data){
//     console.log(data)
// })

// Example of three promises
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("First promise resolved"), 1000);
//   });

//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Second promise resolved"), 2000);
//   });

//   let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Third promise resolved"), 3000);
//   });

// Chain the promises
// promise1
//   .then((result1) => {
//     console.log(result1); // Logs: First promise resolved
//     return promise2; // Return the next promise
//   })
//   .then((result2) => {
//     console.log(result2); // Logs: Second promise resolved
//     return promise3; // Return the next promise
//   })
//   .then((result3) => {
//     console.log(result3); // Logs: Third promise resolved
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const myPromise = new Promise((resolve, reject)=>{
// let success =true;
// if(success){
//   resolve("hello")
// }
// reject("please check")
// })

// myPromise.then((message)=>{
//   console.log(message)
// })
// .catch((error)=>{
//   console.log(error)
// })

// const companies = {
//   name: "Monal",
//   age:100,
//   printDetails: function(){
//   console.log(this.name)
//  }}

// companies.printDetails();

// let companies = {
//     name:"jhony",
//     email:"jhony@gmail.com",
//    }

//   const companiesDetails=function(state,country){
//     console.log(this.name + "," + this.email  + ", " + state + "," + country)
//   }

// companiesDetails.apply(companies, ["Noida", "india"])

// let companies2 = {
//   name:"jhonyy",
//   email:"jhonyy@gmail.com",
//  }
// companiesDetails.apply(companies2, ["Bihar", "India"])

// const myBind = companiesDetails.bind(companies, "Noida", "india");
// myBind();

// const GIT_API ="https://github.com/Monalkumar/HotelApp/commit/018f3c90934db3876526ef6727479e05b3c5aa50/remaining_diff_entries?start_entry=0&bytes=0&lines=0"

// const user = fetch(GIT_API);
// console.log(user)

// user.then(function(data){
//     console.log(data)
// })

// const companies = [
//   {
// name:"jhony",
// age:10
// },
// {
//   name:"jhonye",
//   age:10
//   }, {
//     name:"jhonyee",
//     age:11
//     }, {
//       name:"jhonyg",
//       age:12
//       },
//       {
//         name:"jhonvvbdfy",
//         age:13
//         },
//         {
//           name:"jhonffy",
//           age:15
//           },
//           {
//             name:"jhofgfgny",
//             age:21
//             }
// ]

// const ages =companies.filter((company)=>company.age>12)
// console.log(ages)

// const myPromise = new Promise((resolve,reject)=>{
//   const success = true
//   if(success){
//     resolve("heloo everyone")
//   }
//   else{
//     reject("please check")
//   }
// })
// myPromise.then((mssage)=>{
//   console.log(mssage)
// })
// .catch((error)=>{
//   console.log(error)
// })

// let companies = {
// name: "jhony",
// age: 100,
// email: "jhony@gmail.com",
// }

// const printDetails=function(hometown,country){
//   console.log(this.name + ", " + this.age + ", " + this.email + ", " + hometown + ", " + country )
// }

// printDetails.apply(companies, ["Bihar","india"])

// let companies2 = {
//   name: "jhonyy",
//   age: 101,
//   email: "jhonyy@gmail.com",
// }
// printDetails.apply(companies2, ["UP", "India"])
// const myBind = printDetails.bind(companies, "Noida", "india");
// myBind();

// document.querySelector("#main-component1").addEventListener("click", ()=>{
// console.log("main1 click");
// window.location.href() });
// document.querySelector("#main-component2").addEventListener("click", (e)=>{
// console.log("main2 click")
// e.stopPropagation()},true);
// document.querySelector("#main-component3").addEventListener("click", ()=>{
// console.log("main3 click")},true);

// document.querySelector("#category").addEventListener("click", (e)=>{
//   console.log(e.target.id);
//  if(e.target.tagName="LI"){
//  window.location.href = "/" + e.target.id;
//  }
// })
// document.querySelector("#form").addEventListener("keyup", (e)=>{
// console.log(e);
// if(e.target.dataset.uppercase!== undefined){
// e.target.value = e.target.value.toUpperCase()
// }})

// const arr = ["mango", "apple", "banana", "gauva", "cherry" ];

// function numSum(a,b){
//   console.log(`${a+b}`)
// }

//  numSum(5,100)

// function addNumbers(num1,num2,num3){
//   return num1+num2+num3
// }

// console.log(addNumbers(5,100,500));

// function addNumbers(num1){
//   return function (num2){
//     return function (num3){
//       return function (num4){
//         return function (num5){
//           return function (num6){
//             return(`${num1+num2+num3+num4+num5+num6}`) ;
//           }

//         }
//       }
//     }
//   }
// }

// console.log(addNumbers(100)(200)(300)(400)(500)(600));

// function outerFunction(){
//   var num = 101;

//   function innerFunction(){
//     console.log(num)
//   }
//  innerFunction()
// }

// outerFunction()

// const num = [1,2,3,4,5,6,7]
// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])
// console.log(num[5])
// console.log(num[6])

// function isOddEven(number){

//    for(let number =0; number<=101; number++ ){
//     return number % 2 === 0 ? "Even" : "odd";
// }}
// console.log(isOddEven(5))
// console.log(isOddEven(11))
// console.log(isOddEven(96))

// let name= "monalkumar dhfhgdfg sfdvfdfdfgdgfd"
// let nameA= name.split(" ")
// console.log(nameA);

// let a = new Date()
// console.log(a);
// function reverseArray(arr) {
//   return arr.reverse(); // or, use arr.slice().reverse() to avoid mutating original
// }
//  const name = "hello";
// console.log(name);

// const cart =["mango","apple", "gauva", "orange", "banana"]
// console.log(cart);
// api.createOrder(cart,function(){
//   api.proceedToPayment(function(){
//     api.showOrderSummary(function(){
//       api.updateWalletBalance()
//     }
//     )
//   })
// })

// getData1(function (result1) {
//   getData2(result1, function (result2) {
//     getData3(result2, function (result3) {
//       getData4(result3, function (result4) {
//         console.log("Final result:", result4);
//       });
//     });
//   });
// });

// const cart = ["mango", "apple", "guava", "orange", "banana"];
// console.log("Cart:", cart);

// Mock API object simulating asynchronous operations
// const api = {
//   createOrder: (cart, callback) => {
//     console.log("Creating order with cart:", cart);
//     setTimeout(() => {
//       console.log("Order created successfully.");
//       callback(); // Proceed to the next step
//     }, 1000); // Simulate a 1-second delay
//   },

//   proceedToPayment: (callback) => {
//     console.log("Proceeding to payment...");
//     setTimeout(() => {
//       console.log("Payment processed successfully.");
//       callback(); // Proceed to the next step
//     }, 1000); // Simulate a 1-second delay
//   },

//   showOrderSummary: (callback) => {
//     console.log("Fetching order summary...");
//     setTimeout(() => {
//       console.log("Order summary displayed.");
//       callback(); // Proceed to the next step
//     }, 1000); // Simulate a 1-second delay
//   },

//   updateWalletBalance: () => {
//     console.log("Updating wallet balance...");
//     setTimeout(() => {
//       console.log("Wallet balance updated.");
//     }, 1000); // Simulate a 1-second delay
//   },
// };

// // Execute the flow
// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWalletBalance();
//     });
//   });
// });

// const api = {
//   createOrder: (cart, callback) => {
//     console.log("create order with cart", cart);
//     setTimeout(() => {
//       console.log("order created successfully");
//       callback();
//     }, 1000);
//   },
//   proceedToPayment: (callback) => {
//     console.log("proceed to payment");
//     setTimeout(() => {
//       console.log("payment don successfully");
//       callback();
//     });
//   },

//   showOrderSummary: (callback) => {
//     console.log("fetching order summary");
//     setTimeout(() => {
//       console.log("order summary display successfully");
//       callback();
//     });
//   },

//   updateWalletBalance: (callback) => {
//     console.log("updating wallet balance");
//     setTimeout(() => {
//       console.log("wallet balance upadtd succefully are");
//       callback();
//     });
//   },
// };

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWalletBalance(function () {
//         console.log("finally done successfuly");
//       });
//     });
//   });
// });

// function boilWater() {
//   return new Promise((resolve) => {
//     console.log("Boiling water...");
//     setTimeout(() => {
//       console.log("Water boiled");
//       resolve();
//     }, 1000);
//   });
// }

// function addTeaLeaves() {
//   return new Promise((resolve) => {
//     console.log("Adding tea leaves...");
//     setTimeout(() => {
//       console.log("Tea leaves added");
//       resolve();
//     }, 1000);
//   });
// }

// function addMilkAndSugar() {
//   return new Promise((resolve) => {
//     console.log("Adding milk and sugar...");
//     setTimeout(() => {
//       console.log("Milk and sugar added");
//       resolve();
//     }, 1000);
//   });
// }

// function serveTea() {
//   return new Promise((resolve) => {
//     console.log("Serving tea...");
//     setTimeout(() => {
//       console.log("Tea is ready to serve!");
//       resolve();
//     }, 1000);
//   });
// }

// // Promise chaining
// boilWater()
//   .then(() => addTeaLeaves())
//   .then(() => addMilkAndSugar())
//   .then(() => serveTea())
//   .then(() => {
//     console.log("Enjoy your tea!");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

// (function(){
//   console.log("hello anonymous function")
// })();

// let name = "Monal"
// console.log(name);

// let name = "jhony";
// let age = 100;

// console.log(`${name} and ${age}`)

// const fruits = ["mango", "apple", "orange", "gauva", "banana", "pineapple"]

// var nums = [1,2,3,4,5,6]
// var namy = nums.map((namy)=>`${namy*2}`)

// console.log(namy)

// var nums = [1,2,3,4,5,6,7]
// var namey = nums.filter((namey)=>namey<=5)

// console.log(namey)

// api.createOrder();
// api.poroceedToPayment();
// api.subscribe();
// api.showOrderSummary();
// api.updateWalletBalance();

// const cart = ["mango", "apple", "guava", "orange", "banana"];
// console.log("Cart:", cart);

// const api ={
//   createOrder:(cart,callback)=>{
//     console.log("create order", cart)
//     setTimeout(()=>{
//       console.log("order created succssfully")
//       callback()
//     },1000)
//   },
//   poroceedToPayment:(callback)=>{
//     console.log("payment is necessary");
//     setTimeout(()=>{
//       console.log("payment is done");
//       callback();
//     },1000)
//   },
//   subscribe:(callback)=>{
//     console.log("subscribe now");
//     setTimeout(()=>{
//       console.log("subscribed successfully");
//       callback();
//     },1000)
//   },
//   showOrderSummary:(callback)=>{
//     console.log("create order summary");
//     setTimeout(()=>{
//       console.log("order summary created successfully");
//       callback();
//     },1000)
//   },
//   updateWalletBalance:(callback)=>{
//     console.log("update wallet balance now");
//     setTimeout(()=>{
//       console.log("wallet balance updated successfully");
//       callback();
//     },1000)
//   },
// }

// api.createOrder(cart,function(){
//   api.poroceedToPayment(function(){
//     api.subscribe(function(){
//       api.showOrderSummary(function(){
//         api.updateWalletBalance(function(){
//           console.log("order added successfully")
//         })
//       })
//     })
//   })
// })

// const cart = ["mango", "apple", "guava", "orange", "banana"];
// console.log("Cart:", cart);

// const api = {
//   createOrder:(cart)=>{
//     return new Promise ((resolve)=>{
//       console.log("create the order",cart);
//       setTimeout(()=>{
//         console.log("order created successfully")
//         resolve()
//       })
//     })
//   },
//   proceedToPayment:()=>{
//     return new Promise ((resolve)=>{
//       console.log("process payment");
//       setTimeout(()=>{
//         console.log("payment done successfully")
//         resolve()
//       })
//     })
//   },
//   subscribe:()=>{
//     return new Promise ((resolve)=>{
//       console.log("subscribe the order");
//       setTimeout(()=>{
//         console.log("order subscribed succssfully")
//         resolve()
//       })
//     })
//   },
//   showOrderSummary:()=>{
//     return new Promise ((resolve)=>{
//       console.log("show the ordersummary");
//       setTimeout(()=>{
//         console.log("order summary succssfully")
//         resolve()
//       })
//     })
//   },
//   updateWalletBalance:()=>{
//     return new Promise ((resolve)=>{
//       console.log("update the balance");
//       setTimeout(()=>{
//         console.log("wallet balance updated the successfully ")
//         resolve()
//       })
//     })
//   }
// }

// api.createOrder(cart)
// .then(()=>api.proceedToPayment())
// .then(()=>api.subscribe())
// .then(()=>api.showOrderSummary())
// .then(()=>api.updateWalletBalance()).then(()=>{
//   console.log("order added successfully")
// })
// .catch((error)=>{
//   console.log("plasee resolve this", error)
// })
// api.createOrder(cart)
// .then

// function x (){
//   var name="hello";
//   function y (){
//       console.log(name)
//   }
//  y();
// }
// x();

// function x(){
//   var name = "hello";
//   function y (){
//     console.log(name)
//   }
//   y();
// }
// x();

// const fruits = [ "mango", "apple", "orange", "gauva", "banana"]
// console.log(fruits.push("cherry"))
// console.log(fruits);

// const array = [[1,2,[1,2,3,4,5,6,[1,2,3,4,5,6,7]]],[1,2,3],[2,3],[5,6],[6,7]]
// const newArray = array.flat(Infinity);
// console.log(newArray);

// function a (){
//     var b = 101;
//     c();
//     function c(){
//         console.log(b)
//     }
// }

// a();

// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateWalletBalance();

// var users = {
//     name:"jhony",
//     age:100,
//     country:"India",
//     state:"Bihar",
//     }

//     const getUSerDetails=function(hometown, profession){
//         console.log(` here ${this.name} age is ${this.age} country is ${this.country} state is ${this.state} ${hometown} and profession is ${profession}`)
//     }
// getUSerDetails.apply(users,["Patna", "Actor"]);

// var users2 = {
//     name:"jhonyy",
//     age:100,
//     country:"India",
//     state:"Bihar",
// }
// getUSerDetails.apply(users2,["nawada", "Business"]);
// const myBind = getUSerDetails.bind(users, "Noida", "india");
// myBind();

// a();

// function a (){
//     console.log("hello world")
// }

// const GIT_HUB = "url"
// let user =fetch("https://github.com/Monalkumar");
// console.log(user)

// user.then((message)=>{
//     console.log(message)
// })
// sayHello();
// function sayHello(){
//     let x = 100
//     console.log(x)
// }

// let items = [
//     {color: 'red', type: 'tv', age: 18},
//     {color: 'silver', type: 'phone', age: 20},
//     {color: 'blue', type: 'book', age: 17}
//   ]

//   // an exclude array made of key value pair
//   const excludes = [
//     {k: 'color', v: 'silver'},
//     {k: 'type', v: 'tv'},

//   ]

//   function excludeItems(items, excludes) {

//     excludes.forEach( pair => {
//       items = items.filter(item => item[pair.k] === item[pair.v])
//     })
//    return items
//   }
//   excludeItems(items,excludes);
//   console.log(items)

//   console.log("hello world");

// var num = [1,2,3,4,5,6]
// var numpy = num.map((numpy)=>2*numpy);
// console.log(numpy);

// var num = [1,2,3,4,5,6,7]
// var filtry = num.filter((filtry)=>3<=filtry);
// console.log(filtry)

// const cart = ["mango", "apple", "gauva", "orange", "banana"]

// const api = {
//     createOrder:(cart,callback)=>{
//         console.log(cart, "create order")
//         setTimeout(()=>{
//             console.log("order created successfully");
//             callback();
//         })
//     },
//     proceedTopayment:(callback)=>{
//         console.log("proceed the payment");
//         setTimeout(()=>{
//             console.log("payment done successfully");
//             callback()
//         })
//     },
//     showOrderSummary:(callback)=>{
//         console.log("show order summary");
//         callback();
//         setTimeout(()=>{
//             console.log("order summary done successfully");
//             callback()
//         })
//     },
//     updateWalletBalance:(callback)=>{
//         console.log("please update the wallet balance");
//         setTimeout(()=>{
//             console.log("wallet balance updated successfully");
//             callback()
//         })
//     }
// }
// api.createOrder(cart,function(){
//     api.proceedTopayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWalletBalance(function(){
//                 console.log("successfully orderd product")
//             })
//         })
//     })
// })
// const cart = ["mango", "apple", "banana", "watermelon", "gauva"]
// const api = {
//     createOrder:(cart, callback)=>{
//         console.log("plase create order", cart)
//         callback(()=>{
//             console.log("order created successfully")
//             callback();
//         })
//     },
//     proceedToPayment:(callback)=>{
//         console.log("proceed to payment")
//         callback(()=>{
//             console.log("payment done successfuly")
//             callback();
//         })
//     },
//     showOrderSummary:(callback)=>{
//         console.log("show order summary")
//         callback(()=>{
//             console.log("order summary is done successfully")
//             callback();
//         })
//     },
//   updateWalletBalance:(callback)=>{
//         console.log("please update balance", cart)
//         callback(()=>{
//             console.log("balance updated successfully")
//             callback();
//         })
//     },

// }

// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWalletBalance(function(){
//                 console.log("order is succssfuly orderd here")
//             })
//         })
//     })
// })

// const Company = {
//     name:"henary",
//     age:100,
//     email:"henary@gmail.com",

// }

// const companyDetails=function(country, state){
//     console.log( this.name + " "  + "age is" +" " + this.age + " " + country + " " + state)
// }
// companyDetails.apply(Company , [ "India", "Noida"]);

// const Company2 = {
//     name: "johny",
//     age:100,
//     email:"jhony@gmail.com",
// }

// companyDetails.apply(Company2, ["India", "Patna"]);

// const fruits = ["hello"]

// document.querySelector("#grandparent").addEventListener("click",function(){
//     console.log("grandparent clicked")
// });
// document.querySelector("#parent").addEventListener("click", function(){
//     console.log("parent clicked")
// });
// document.querySelector("#child").addEventListener("click", function(){
//     console.log("child clicked")
// });

// document.querySelector("#grandparent").addEventListener("click", function(e){
//     console.log("grandparent clicked");
//     e.stopPropagation();

// },true);

// document.querySelector("#parent").addEventListener("click",function(){
//    console.log("parent clicked");

// },true);

// document.querySelector("#child").addEventListener("click", function(){
//     console.log("child clicked");

// },true);

//  document.querySelector("#category").addEventListener("click",(e)=>{
// console.log(e.target.id);
// if(e.target.tagName = "LI"){
//     window.location.href= "/" + e.target.id
// }

//  })

//  document.querySelector("#form").addEventListener("input",function(e){
//     console.log(e)
//     if(e.target.dataset.uppercase !== undefined){
//         e.target.value = e.target.value.toUpperCase();
//     }
//  })

// document.querySelector("#form")

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

//     const companies = {
//     name:"Henary",
//     age:100,
//     email:"henary@gmail.com",
//    }
//    const getUserDetails=function(country,state){
//     console.log("user details:", " ",this.name ,"age is", this.age, "and email is", this.email + " "+" ", country + ""+ ", "+ state  )
// }
// getUserDetails.call(companies,"India","UP");

// const companies2 = {
//     name:"Henary",
//     age:100,
//     email:"henary@gmail.com",

// }
// getUserDetails.apply(companies, ["India","bihar"]);

// const userDetails = getUserDetails.bind(companies,"India","UP");
// userDetails();

//function currying

// const multiple = function(x,y){
// console.log(x*y)
// }
// const multiply = multiple.bind(this,5);
// multiply(2);
// const multplyByTwo = multiple.bind(this,7)
// multplyByTwo(3)
// const multiplies = multiple.bind(this,101)
// multiplies(15);

// const add = function(x,y){
//     console.log(x+y)
// }
// const addnum1 = add.bind(this,5);
// addnum1(10);
// const addnum2 = add.bind(this,6);
// addnum2(11);
// const addnum3 = add.bind(this,7);
// addnum3(12);

// const multiplication = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// const multiplicationNum = multiplication(2)
// multiplicationNum(3)

// function sum (a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     return a+b+c+d+e
//                 }
//             }
//         }
//     }
// }
// console.log(sum(1)(2)(3)(4)(5));

// const multiple = "hello"

//  api.createOrder();
//  api.proceedToPayment();
//  api.showOrdrSummary();
//  api.showUpdatedWallet()
// call/bind/apply
//     const Company = {
//     name:"henary",
//     age:100,
//     email:"henary@gmail.com",
//    }

// const companyDetails = function(country,state){
//     console.log( this.name + " "+ "age is" + " "+ this.age + " " +"email is" + " " + this.email + " " +"country is" + " " + country + " "+ "and state is" + " " + state  )

//   }
//   companyDetails.apply(Company, ["india","Bihar"])

//     const Company2 = {
//     name:"genary",
//     age:99,
//     email:"genary@gmail.com",

// }
// companyDetails.apply(Company2, ["india", "Delhi"]);

// const Company3 = {
//     name:"jhony",
//     age:97,
//     email:"jhony@gmail.com",

// }
// companyDetails.apply(Company3, ["india", "Pune"]);
// const showCompany2 = companyDetails.bind(Company, "India", "Delhi");
// showCompany2();

// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updateWalletBalance();

// 5 steps for Food Applications
// 1.Place Food
// 2.order Food
// 3.prepare Food
// 4.Eat Food
// 5.Feels happy

// function placeOrder(foodItem) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`1️⃣ Order placed for ${foodItem}`);
//       resolve(foodItem);
//     }, 1000);
//   });
// }

// function cookOrder(foodItem) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`2️⃣ ${foodItem} is being cooked`);
//       resolve(`${foodItem} cooked`);
//     }, 1000);
//   });
// }

// function deliverOrder(cookedFood) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`3️⃣ ${cookedFood} is out for delivery`);
//       resolve(`${cookedFood} delivered`);
//     }, 1000);
//   });is
// }

// // Chain the steps
// placeOrder("Pizza")
//   .then((hello) => cookOrder(hello))
//   .then((hi) => deliverOrder(hi))
//   .then((finalStatus) => {
//     console.log("✅ Order Status:", finalStatus);
//   });

// function placeOrder(foodItem){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("place order");
//             },500)
//              resolve(foodItem)
//     })
// }
// function prepareFood(foodItem){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`${foodItem} is placed`);

//         },1000)
//          resolve(`${foodItem}`, "is preapring")
//     })
// }
//  function orderDelivered(foodItem){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(`${foodItem}`, "is preparing");
//             resolve(`${foodItem}`, "is deliverd")
//         },2000)
//     })
//  }

// function feelHappy(foodItem){
// return new Promise((resolve)=>{
// setTimeout(()=>{
//     console.log(`${foodItem}`, "is deliverd feel happy")
//     resolve("felling Happy")
// },3000)
// })
// }

// placeOrder("pizza")
// .then((placeFood)=>prepareFood(placeFood))
// .then((preparedFood)=>orderDelivered(preparedFood))
// .then((orderDelivered)=>feelHappy(orderDelivered))
// .then(()=>{
//     console.log("very happy")
// })

// getName()
// console.log(x)
// console.log(getName)
// function getName(){
//     console.log("hello world")

// }

// function placeFood(foodItem) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`place order ${foodItem}`);
//       resolve(foodItem);
//     }, 1000);
//   });
// }
// function prepareFood(cookedFood) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("pizza is preparing");
//       resolve(cookedFood);
//     }, 2000);
//   });
// }
// function deliverFood(foodDeliver) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("pizza is deliverd");
//       resolve(foodDeliver);
//     }, 2500);
//   });
// }

// placeFood("Pizza")
// .then(()=>prepareFood())
// .then(()=>deliverFood())
// .then(()=>{
//     console.log("successful")
// })



// function addSum(a,b){
//     return a+b
// }
// console.log(addSum(2,3));



// addSum(1)(2)(3)(4)(5) //15


// function addSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     return a+b+c+d+e
//                 }
//             }
//         }
        
//     }
// }

// console.log(addSum(1)(2)(3)(4)(5));







// document.querySelector("grandparent").addEventListener("click")


// function sayHello(){
//     var name = "hello";
//     function closureFunction(){
//         console.log("hello world")
//     }
// }

// function placeOrder(foodItem){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("food is placing");
//             resolve(foodItem)
//         },1000)
//     })
// }

// function prepareFood(foodPreparing){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("food is preparing");
//             resolve(foodPreparing)
//         },1500)
//     })
// }

// function deliverFood(feelingHappy){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("feeling Happy");
//             resolve(feelingHappy)

//         },2000)
//     })
// }
// function deliverFoody(veryFeelingHappy){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("vary feeling Happy");
//             resolve(veryFeelingHappy)

//         },2500)
//     })
// }


// placeOrder("Pizza")
// .then((foodPreparing)=>prepareFood(foodPreparing))
// .then((feelingHappy)=>deliverFood(feelingHappy))
// .then((veryFeelingHappy)=>deliverFoody(veryFeelingHappy))
// .then(()=>{
//     console.log("testy pizza now feeling good")
// })

// debouncing in js

// function getText(){
//     console.log("hello world")
// }



// function getData(){
//     console.log("hello")
// }

// function debounce(func,delay){
//     let timer;
//     return function(){
//         let context = this;
//         agrs=arguments
//         clearTimeout(timer)

//         timer=setTimeout(()=>{
//         getData(context,arguments)
//         },delay)
//     }
// }

// let betterFunction = debounce(getData,300);

// function placeFood(placeFood){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("placeFood")
//             resolve(PlaceF)

//         })
//     })
// }


// function placeFood(foodItem){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("food is orderd");
//         resolve(foodItem)
//     },1000)
// })
// }
// function preparigFood(preparingPizza){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("pizza is preparing");
//         resolve(preparingPizza)
//     },2000)
// })
// }
// function foodPrepared(pizzaIsPrepared){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("Pizza is prepared");
//         resolve(pizzaIsPrepared)
//     },2500)
// })
// }
// function foodReached(feelingHappy){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("food is tasty");
//         resolve(feelingHappy)
//     },2500)
// })
// }

// placeFood("pizza")
// .then((preparingPizza)=>preparigFood(preparingPizza))
// .then((pizzaIsPrepared)=>foodPrepared(pizzaIsPrepared))
// .then((feelingHappy)=>foodReached(feelingHappy))
// .then(()=>{
//     console.log("stomach is full")
// })

// const GIT_API = "url";
// let user = fetch("https://github.com/Monalkumar");
// console.log(user)

// user.then((message)=>{
//     console.log(message);
// })


// addSum(1)(2)(3)(4)(5) //15


// function addSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     return a+b+c+d+e
//                 }
//             }
//         }
        
//     }
// }

// console.log(addSum(1)(2)(3)(4)(5));

// addSum(1)(2)(3)(4)(5) //15

// function addSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function(e){
//                     return a+b+c+d+e
//                 }
//             }
//         }
//     }
    
// }

// let sums= addSum();

    // function* numberGenerator() {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    // }
    // numberGenerator();

    // function* generatorNumbers(){
    //     yield 5;
    //     yield 10;
    //     yield 15;
    // }
    // let nums = generatorNumbers();
    // console.log(nums.next())
    // console.log(nums.next())
    // console.log(nums.next())
    // console.log(nums.next())

//     const company ={
//     name:"henary",
//     age:100,
//     email:"henary@gmail.com",
// }
// let getUser=function(country,state){
//         console.log(this.name + "" + this.age + "" +this.email + " " + country + " " +" " + state)
//     }
// getUser.apply(company,["India", "Bihar"]);
// const company2 ={
//     name:"henary2",
//     age:101,
//     email:"henary2@gmail.com",
    
// }
// getUser.apply(company2, ["India", "Delhi"]);

// const myfunction = getUser.bind(company, "India", "Maharashtra");
// myfunction()

// let arr  = [1,2,,3,4,,5]


// function getData(){
//     console.log("hello world")
// }
// function debounce(func,delay){
//    let timer;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer)
//      timer = setTimeout(()=>{
//           getData(arguments,context); 
//         },delay)
//     }
// }

// add(1)(2)(3)(4)(5)(6)(7)

// function addSum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return function (e){
//                     return function (f){
//                         return function (g){
//                             return a+b+c+d+e+f+g
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// const addNums = addSum(1)(2)(3)(4)(5)(6)(7)
// console.log(addNums)

// function placeFood(placeFood){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("placeFood")
//             resolve(placeFood)

//         })
//     })
// }


// function placeFood(foodItem){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("food is orderd");
//         resolve(foodItem)
//     },1000)
// })
// }
// function preparigFood(preparingPizza){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("pizza is preparing");
//         resolve(preparingPizza)
//     },2000)
// })
// }
// function foodPrepared(pizzaIsPrepared){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("Pizza is prepared");
//         resolve(pizzaIsPrepared)
//     },2500)
// })
// }
// function foodReached(feelingHappy){
// return new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log("food is tasty");
//         resolve(feelingHappy)
//     },2500)
// })
// }

// placeFood("pizza")
// .then((preparingPizza)=>preparigFood(preparingPizza))
// .then((pizzaIsPrepared)=>foodPrepared(pizzaIsPrepared))
// .then((feelingHappy)=>foodReached(feelingHappy))
// .then(()=>{
//     console.log("stomach is full")
// })

// function placeFood(foodItem){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("food Item is now Pizza")
//             resolve((foodItem))
//         },1000)
//     })
// }
// function OrderedFood(foodOrdered){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("food Item is now Pizza and is ordered for making")
//             resolve((foodOrdered))
//         },1000)
//     })
// }
// function preparingFood(foodPreparing){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("pizza is preparing")
//             resolve((foodPreparing))
//         },1500)
//     })
// }
// function FoodReacchedHome(deliver){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("pizza reached to home")
//             resolve((deliver))
//         },2000)
//     })
// }
// function tastyFood(deliciousFood){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("feeling happy")
//             resolve((deliciousFood))
//         },2500)
//     })
// }
// placeFood("pizza")
// .then((foodItem)=>placeFood(foodItem))
// .then((foodOrdered)=>OrderedFood(foodOrdered))
// .then((foodPreparing)=>preparingFood(foodPreparing))
// .then((deliver)=>FoodReacchedHome(deliver))
// .then((deliciousFood)=>tastyFood(deliciousFood))
// .then(()=>{
//     console.log("fine")
// })

// function* generatorFunc(){
//     console.log("first gen")
//     yield 1;
//      console.log("middle gen")
//     yield 2;
//      console.log("third gen")
//     yield 3;
// }

// const gen = generatorFunc();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())



// function outer() {
//   let counter = 0; // variable in outer scope

//   function inner() {
//     counter++; 
//     console.log(counter);
//   }

//   return inner;
// }


// function outer(){
//   let counter = 0;
//   function inner (){
//     counter++
//     console.log(counter)
//   }
//   return inner
// }

// const closure = outer();
// console.log(closure())


// function x (){
//   let nums = 100;

//   function y (){
//     console.log(nums)
    
//   }
//    return y;
// }
//  x()

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// let count = 0
// function getData(){
//   count++
//   console.log("API calls", count)
// }

// function debounce(func,delay){
//   let timer;
//   return function(){
//     let context = this;
//     args = arguments
//     clearTimeout(timer)
//      timer = setTimeout(()=>{
//       getData(arguments,context);
      
//     },delay)
//   }
// }

// const betterFunction = debounce(getData,500);


// function* generatorFunc(){
//     console.log("first gen")
//     yield 1;
//      console.log("middle gen")
//     yield 2;
//      console.log("third gen")
//     yield 3;
// }

// const gen = generatorFunc();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function* genratorFunc(){

//   yield 1
//   console.log("first gen")
//   yield 2
//   console.log("second gen")
//   yield 3
//   console.log("third gen")
// }

// const gen = genratorFunc();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// add(1)(2)(3)(4)(5)(6)(7)

// function addSum(a){
//   return function (b){
//     return function (c){
//       return function (d){
//         return function (e){
//           return function (f){
//             return function (g){
//               return a+b+c+d+e+f+g
//             }
//           }
//         }
//       }
//     }
//   }
// }
// var nums = addSum(1)(2)(3)(4)(5)(6)(7)
// console.log(nums)


// var num = 100;
// var num =function (){
//   console.log("get num here")
// }

// sayHello();
// function sayHello() {
//   console.log("Hello!");
// }
// localStorage.setItem("count",1);
// const value = localStorage.getItem("count");
// console.log(value);

// function currying(1)(2)(3)(4)(5)

// function sum (a){
//   return function (b){
//     return function  (c){
//       return function (d){
//         return function (e){
//           return a+b+c+d+e
//         }
//       }
//     }
//   }
// }
// const nums =(sum(1)(2)(3)(4)(5));
// console.log(nums)

// function item(foodName){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("food item name is"+ "", foodName);
//       resolve(foodName)
//     },1000)
//   })
// }
// function placeOrder(foodPlacing){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("pizza is placed");
//       resolve(foodPlacing)
//     },1500)
//   })
// }
// function foodProcess(pizzaIsPlacing){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//     console.log("food is making");
//     resolve(pizzaIsPlacing)
//     },1900)
    
//   })
// }
// function readyForPlaced(pizzaIsmaking){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("food is reached");
//       resolve(pizzaIsmaking)
//     },2100)
//   })
// }
// function tastyFood(awesome){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       console.log("tasty pizza yar");
//       resolve(awesome)
//     },2500)
//   })
// }

// item("pizza")
// .then((foodName)=>placeOrder(foodName))
// .then((foodPlacing)=>foodProcess(foodPlacing))
// .then((pizzaIsPlacing)=>readyForPlaced(pizzaIsPlacing))
// .then((pizzaIsmaking)=>tastyFood(pizzaIsmaking))

// .then(()=>{
//   console.log("very tasty hai")
// })


// const nums = [1,2,3,4,5,6]
// const numsy = [7,11,21,22,23,24,25]

// const spread=[...nums,...numsy];

// console.log(spread)

// const Company =[{
//     name:"john",
//     email:"john@gmail.com",
//     age:100,
    
// },
// {
//     name:"johnye",
//     email:"johnye@gmail.com",
//     age:100,
    
// },
// {
//     name:"johnyi",
//     email:"johnyi@gmail.com",
//     age:100,
    
// },
// ]

// Company.map((user)=>(
// document.innerHTML=user.name
// ))


const company = {
    name:"jhony",
    age:97,
    email:"jhnony@gmail.com",
}
function printDetails(country,state){
    console.log(`name ${this.name} age is ${this.age} and emails is ${this.email} and ${country} having ${state}` )
}
    printDetails.call(company,"india","Bihar")

const company2 = {
    name:"henary",
    age:95,
    email:"henary@gmail.com"
}
printDetails.call(company2,"USA","Delhi")
const company3 = {
    name:"henarye",
    age:96,
    email:"henarye@gmail.com"
}
printDetails.apply(company3,["USA","Bihar"]);

const company4 = {
    name:"henaryee",
    age:96,
    email:"henaryee@gmail.com"
}
printDetails.apply(company4,["USA","Bihar"]);
const company5 = {
    name:"henaryee",
    age:96,
    email:"henaryee@gmail.com"
}
printDetails.apply(company5,["USA","Bihar"]);
const bindFunction = printDetails.bind(company4,"USA","UP");
bindFunction()

