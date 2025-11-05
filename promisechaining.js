// const myPromise = new Promise((resolve,reject)=>{
//     const success = "hello"
//     if(success==="hello"){
//         resolve("successfully")
//     }
//     reject("please check")
// })

// myPromise.then((message)=>{
// try{
//     console.log(message);
// }
// catch(err){
//     console.log("please check", err)
// }


// })


// Simulating asynchronous operations
function fetchData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, 1000);
    });
  }
  
  fetchData("https://api.example.com/data1")
    .then((data1) => {
      console.log(data1); // Logs: "Data from https://api.example.com/data1"
      return fetchData("https://api.example.com/data2");
    })
    .then((data2) => {
      console.log(data2); // Logs: "Data from https://api.example.com/data2"
      return fetchData("https://api.example.com/data3");
    })
    .then((data3) => {
      console.log(data3); // Logs: "Data from https://api.example.com/data3"
    })
    .catch((error) => {
      console.error("Error:", error); // Handles any errors in the chain
    })
    .finally(() => {
      console.log("Promise chain complete.");
    });
  