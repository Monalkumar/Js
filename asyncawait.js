// const cart = ["mango", "apple", "orange", "cherry", "banana"]
// const api ={
//     createOrder:(cart)=>{
//         return new Promise((resolve)=>{
//             console.log("please add order", cart);
//             setTimeout(()=>{
//                 console.log("order addd succssfully");
//                 resolve()
//             })
//         })
//     },
//     poroceedToPayment:()=>{
//         return new Promise((resolve)=>{
//             console.log("please add payment");
//             setTimeout(()=>{
//                 console.log("payment added successfully");
//                 resolve()
//             })
//         })
//     },
//     showOrderSummary:()=>{
//         return new Promise((resolve)=>{
//             console.log("please show ordersummary");
//             setTimeout(()=>{
//                 console.log("order summary added successfully now");
//                 resolve()
//             })
//         })
//     },
//     updateWalletBalance:()=>{
//         return new Promise((resolve)=>{
//             console.log("please proceed payment");
//             setTimeout(()=>{
//                 console.log("payment added successfully");
//                 resolve()
//             })
//         })
//     },
// }

// api.createOrder(cart)
// .then(()=>api.poroceedToPayment())
// .then(()=>api.showOrderSummary())
// .then(()=>api.updateWalletBalance())
// .then(()=>{
//     console.log("successfully process")
// })
// .catch((error)=>{
// console.log("please resolve this",error)
// })




// api.createOrder();
// api.proceedToPayment();
// api.showOrderSummary();
// api.updatedWalletSummary();

const cart = ["mango", "apple", "orange", "gauva", "cherry"]
const api={
createOrder:(cart)=>{
        return new Promise((resolve)=>{
            console.log("create order",cart)
            setTimeout(()=>{
                console.log("order created successfully");
                 resolve();
            })
           
        }) 
    },
    proceedToPayment:()=>{
        return new Promise((resolve)=>{
            console.log("make payment")
            setTimeout(()=>{
                console.log("payment done successfully");
                 resolve()
            })
           
        }) 
    },
    showOrderSummary:()=>{
        return new Promise((resolve)=>{
            console.log("show order summary")
            setTimeout(()=>{
                console.log("order summary done");
                 resolve()
            })
           
        }) 
    },
    updatedWalletSummary:()=>{
        return new Promise((resolve)=>{
            console.log("update wallet")
            setTimeout(()=>{
                console.log("updatd wallet summary done here");
                 resolve()
            })
           
        }) 
    },
      
}

api.createOrder(cart)
.then(()=>proceedToPayment())
.then(()=>showOrderSummary())
.then(()=>updatedWalletSummary())
.then(()=>{
  console.log("successfully")
}).catch((error)=>{
    console.log(error,"please check and resolve accurately")
}) 