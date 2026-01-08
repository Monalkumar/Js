const employeeDetails={
    name:"jhony",
    email:"jhony@gmail.com",
    age:97
}

function printEmployeeDetails(){
    console.log(`name is ${this.name} and ${this.email} having ${this.age}`)
}

let myBind = printEmployeeDetails.bind(employeeDetails);
myBind()