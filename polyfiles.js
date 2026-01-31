const employeeDetails={
    name:"jhony",
    email:"jhony@gmail.com",
    age:97
}

function printEmployeeDetails(country, state){
    console.log(`name is ${this.name} and ${this.email} having ${this.age} country is ${country} and  state is ${state}`)
}

let myBind = printEmployeeDetails.bind(employeeDetails, "India", "Bihar");
myBind()