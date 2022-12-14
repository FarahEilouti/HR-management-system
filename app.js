var departments = ["Administration", "Marketing", "Development", "Finance"]
var levels = ["Junior", "Mid", "Senior"]
var IDCounter = 0

function getUniqueID(){
    IDCounter = IDCounter + 1
    return String(IDCounter).padStart(4, '1000')
}

function getSalary(eLevel){
    var juniorSalary = Math.floor(500 + Math.random() * 500); // 500 = max - min
    var midSalary = Math.floor(1000 + Math.random() * 500);
    var seniorSalary = Math.floor(1500 + Math.random() * 500); 

    if (eLevel == "Junior"){
        return juniorSalary;
    }
    if (eLevel == "Mid"){
        return midSalary;
    }
    if (eLevel == "Senior"){
        return seniorSalary;
    }
}

function getNetSalary(eSalary){
    return eSalary - eSalary * 0.75;
}


function Employee(employeeName, employeeDepartment, employeeLevel, employeeSalary, employee_image){
    this.id = getUniqueID();
    this.name = employeeName;
    this.department = employeeDepartment;
    this.level = employeeLevel;
    this.salary = employeeSalary;
    this.netSalary = 0;
    this.image = employee_image;
}


const employeeExample1 = new Employee("Ghazi Samer ", departments[0], levels[2], getSalary("Senior"),"./assets/man-employee5.jpg" )
employeeExample1.netSalary =  getNetSalary(employeeExample1.salary)

const employeeExample2 = new Employee("Lana Ali", departments[3], levels[2], getSalary("Senior"),"./assets/woman-employee1.jpg" )
employeeExample2.netSalary =  getNetSalary(employeeExample2.salary)

const employeeExample3 = new Employee("Tamara Ayyoub", departments[1], levels[2], getSalary("Senior"),"./assets/woman-employee3.jpg")
employeeExample3.netSalary =  getNetSalary(employeeExample3.salary)

const employeeExample4 = new Employee("Safi Waleed", departments[0], levels[2], getSalary("Mid"),"./assets/man-employee2.jpg")
employeeExample4.netSalary =  getNetSalary(employeeExample4.salary)

const employeeExample5 = new Employee("Omar Zaid", departments[2], levels[2], getSalary("Senior"),"./assets/man-employee3.jpg")
employeeExample5.netSalary =  getNetSalary(employeeExample5.salary)

const employeeExample6 = new Employee("Rana Saleh", departments[2], levels[0], getSalary("Junior"),"./assets/woman-employee2.jpg")
employeeExample6.netSalary =  getNetSalary(employeeExample6.salary)

const employeeExample7 = new Employee("Hadi Ahmad", departments[3], levels[2], getSalary("Senior"),"./assets/man-employee4.jpg")
employeeExample7.netSalary =  getNetSalary(employeeExample7.salary)


console.log("Employee Name: " + employeeExample1.name)
console.log("Employee Salary: " + employeeExample1.salary)
console.log("Employee ID: " + employeeExample1.id)
console.log("Employee netSalary: " + employeeExample1.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample2.name)
console.log("Employee Salary: " + employeeExample2.salary)
console.log("Employee ID: " + employeeExample2.id)
console.log("Employee netSalary: " + employeeExample2.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample3.name)
console.log("Employee Salary: " + employeeExample3.salary)
console.log("Employee ID: " + employeeExample3.id)
console.log("Employee netSalary: " + employeeExample3.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample4.name)
console.log("Employee Salary: " + employeeExample4.salary)
console.log("Employee ID: " + employeeExample4.id)
console.log("Employee netSalary: " + employeeExample4.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample5.name)
console.log("Employee Salary: " + employeeExample5.salary)
console.log("Employee ID: " + employeeExample5.id)
console.log("Employee netSalary: " + employeeExample5.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample6.name)
console.log("Employee Salary: " + employeeExample6.salary)
console.log("Employee ID: " + employeeExample6.id)
console.log("Employee netSalary: " + employeeExample6.netSalary)

console.log("----------------------")

console.log("Employee Name: " + employeeExample7.name)
console.log("Employee Salary: " + employeeExample6.salary)
console.log("Employee ID: " + employeeExample7.id)
console.log("Employee netSalary: " + employeeExample7.netSalary)

console.log("----------------------")

Employee.prototype.eLevel = function(){
    document.write(`<div class=card id=d${this.id}>
    <img src="${this.image}" alt="employee_image">
    <h6>Employee: ${this.name} </h6>
    <h6> ID: ${this.id} </h6>
    <h6> Department: ${this.department} </h6>
    <h6>Level: ${this.level} </h6>
    <h6> Salary: ${this.salary} </h6></div><br>`);
};

employeeExample1.eLevel();
employeeExample2.eLevel();
employeeExample3.eLevel();
employeeExample4.eLevel();
employeeExample5.eLevel();
employeeExample6.eLevel();
employeeExample7.eLevel();