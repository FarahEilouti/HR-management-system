

var departments = ["Administration", "Marketing", "Development", "Finance"]
var levels = ["Junior", "Mid", "Senior"]

function uniqueID(){
    var val = Math.floor(1000 + Math.random() * 8999); // max-min 9999-1000
    return val
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


var employeeExample1 = {
    id: uniqueID(),
    name: "Ghazi Samer",
    department: departments[0],
    level: levels[2],
    salary: getSalary("Senior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample2 = {
    id: uniqueID(),
    name: "Lana Ali",
    department: departments[3],
    level: levels[2],
    salary: getSalary("Senior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample3 = {
    id: uniqueID(),
    name: "Tamara Ayyoub",
    department: departments[1],
    level: levels[2],
    salary: getSalary("Senior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample4 = {
    id: uniqueID(),
    name: "Safi Waleed",
    department: departments[0],
    level: levels[1],
    salary: getSalary("Mid"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};
var employeeExample5 = {
    id: uniqueID(),
    name: "Omar Zaid",
    department: departments[2],
    level: levels[2],
    salary: getSalary("Senior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample6 = {
    id: uniqueID(),
    name: "Rana Saleh",
    department: departments[2],
    level: levels[0],
    salary: getSalary("Junior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

var employeeExample7 = {
    id: uniqueID(),
    name: "Hadi Ahmad",
    department: departments[3],
    level: levels[2],
    salary: getSalary("Senior"),
    // netSalary: this.salary - this.salary * 7.5,
    image: "https://thumbs.dreamstime.com/z/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg", 
};

console.log("Employee Name: " + employeeExample1.name)
console.log("Employee Salary: " + employeeExample1.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample2.name)
console.log("Employee Salary: " + employeeExample2.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample3.name)
console.log("Employee Salary: " + employeeExample3.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample4.name)
console.log("Employee Salary: " + employeeExample4.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample5.name)
console.log("Employee Salary: " + employeeExample5.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample6.name)
console.log("Employee Salary: " + employeeExample6.salary)
console.log("----------------------")

console.log("Employee Name: " + employeeExample7.name)
console.log("Employee Salary: " + employeeExample6.salary)
console.log("----------------------")









