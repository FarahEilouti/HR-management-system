

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


var employeeExample1 = {
    id: getUniqueID(),
    name: "Ghazi Samer",
    department: departments[0],
    level: levels[2],
    salary: getSalary("Senior"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample2 = {
    id: getUniqueID(),
    name: "Lana Ali",
    department: departments[3],
    level: levels[2],
    salary: getSalary("Senior"),
    netSalary: 0, 

    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample3 = {
    id: getUniqueID(),
    name: "Tamara Ayyoub",
    department: departments[1],
    level: levels[2],
    salary: getSalary("Senior"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample4 = {
    id: getUniqueID(),
    name: "Safi Waleed",
    department: departments[0],
    level: levels[1],
    salary: getSalary("Mid"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample5 = {
    id: getUniqueID(),
    name: "Omar Zaid",
    department: departments[2],
    level: levels[2],
    salary: getSalary("Senior"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample6 = {
    id: getUniqueID(),
    name: "Rana Saleh",
    department: departments[2],
    level: levels[0],
    salary: getSalary("Junior"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample7 = {
    id: getUniqueID(),
    name: "Hadi Ahmad",
    department: departments[3],
    level: levels[2],
    salary: getSalary("Senior"),
    netSalary: 0, 
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};


employeeExample1.netSalary = getNetSalary(employeeExample1.salary)
employeeExample2.netSalary = getNetSalary(employeeExample2.salary)
employeeExample3.netSalary = getNetSalary(employeeExample3.salary)
employeeExample4.netSalary = getNetSalary(employeeExample4.salary)
employeeExample5.netSalary = getNetSalary(employeeExample5.salary)
employeeExample6.netSalary = getNetSalary(employeeExample6.salary)
employeeExample7.netSalary = getNetSalary(employeeExample7.salary)


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
