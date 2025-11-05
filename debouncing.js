// let count = 0;
// function getData(){
//     console.log("hello world", count++)
// }
// const debounce =(func, delay)=>{
//     let timer;
   
//       


// let count = 0
// function getData(){
//     console.log("hello", count++)
// }
// function debounceFunction (func, delay){
//     let timer;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer)

//         timer = setTimeout(()=>{
//             getData(context, arguments)
//         },delay)
        

     
//     }
// }

// let betterFunction = debounceFunction(getData, 300)

// let count = 0;

// function getData(){
//     console.log("hello world",count++)
// }

// function debounce(func, delay){
//     let timer;
//     return function (){
//         let context = this;
//         args= arguments;
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             getData(context,arguments)
//         },delay)
//     }
// }

// let debounceFunction = debounce(getData,300);



// let company = {
//     name:"jhony",
//     email:"johny@gmail.com",
//     country: "USA"

// }
// console.log("company=>", company )
//  let newCompnay = company;
//  console.log("newCompany=>",newCompnay);

//  newCompnay.name = "henary";
//  console.log(company)


// function add(a){
//     return function(b){
//         return function (c){
//             return function (d){
//                 return function (e){
//                     return (a+b+c+d+e)
//                 }
//             }
//         }
//     }
// }

// console.log((add(1)(2)(3)(4)(5)))

// let count = 0
// function getData(){
//     console.log("hello world", count++)
// }


//     function debounceFunction(func, delay){
//     let timer;
//     return function(){
//         let context = this;
//             args=arguments;
//             clearTimeout(timer)
//            timer= setTimeout(()=>{
//             getData(context,arguments)
//         }, delay)
//     }
// }

// let functionBetter = debounceFunction(getData, 300) 

// let count = 0;
// function getData(){
//     console.log("hello wolrld", count++)
// }

// function debounce(func, delay){
//     let timer;
//     return function(){
//         let context = this;
//         args = arguments;
//         clearTimeout(timer)
//      timer=setTimeout(()=>{
//      getData(context,arguments)
//      },delay)
//     }
// }

// let count = 0;

function getData(){
    console.log("hello world")
}

function debounce(func,delay){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer)
       
       timer= setTimeout(()=>{
           getData(context,arguments);
        },delay)
    }
}

const betterFunction = debounce(getData,1000)







 





