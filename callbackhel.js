// const api ={
//     createOrder:(cart,callback)=>{
//       console.log("create order with cart", cart);
//       setTimeout(()=>{
//         console.log("order created successfully")
//         callback()
//       },1000)
//     },
//     proceedToPayment:(callback)=>{
//       console.log("proceed to payment");
//       setTimeout(()=>{
//         console.log("payment don successfully");
//         callback()
//       })
//     },
    
//     showOrderSummary:(callback)=>{
//       console.log("fetching order summary");
//       setTimeout(()=>{
//         console.log("order summary display successfully");
//         callback();
//       })
//     }, 
  
//     updateWalletBalance:(callback)=>{
//       console.log("updating wallet balance");
//       setTimeout(()=>{
//         console.log("wallet balance upadtd succefully are");
//         callback()
//       })
//     }}
//   api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
//       api.showOrderSummary(function(){
//         api.updateWalletBalance(function(){
//           console.log("finally done successfuly")
//         })
//       })
//     })
//   })

//   api.createOrder(cart,function(){
//     api.proceedToPayment(function(){
      
//     })
//   })

// api.createOrder
// api.proceedToPayment
// api.showOrderSummary
// api.updateWalletBalance

const api={
  createOrder:(cart,callback)=>{
    console.log("create order with cart", cart);
    setTimeout(()=>{
      console.log("order created successfully")
      callback();
    },1000)
  },
  proceedToPayment:(callback)=>{
  console.log("proceed to payment")
  setTimeout(()=>{
    console.log("payment done successfully");
    callback()
  },1000)
  },
  showOrderSummary:(callback)=>{
    console.log("order summary has been created");
    setTimeout(()=>{
      console.log("order summary done");
      callback();
    })
  },
  updateWalletBalance:(callback)=>{
    console.log("please update the wallet balance ");
    setTimeout(()=>{
      console.log("wallet balance updated successfully here");
      callback();
    })
  }
}

api.createOrder(cart, function(){
  api.poroceedToPayment(function(){
    api.showOrderSummary(function(){
      api.updateWalletBalance(function(){
             console.log("succesfully order here")
      })
    })
  })
})