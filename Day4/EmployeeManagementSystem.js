"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    id;
    name;
    email;
    password;
    salary;
    loggedIn;
    constructor(id, name, email, password, salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.salary = salary;
        this.loggedIn = false;
    }
    canLogin() {
        return true;
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    login(email, password) {
        if (!this.canLogin()) {
            console.log("I am not loginable");
            return undefined;
        }
        if (this.email === email && this.password === password) {
            this.loggedIn = true;
            console.log("Logged In");
            return this;
        }
        else {
            console.log("Login fail");
            return undefined;
        }
    }
    logout() {
        if (this.loggedIn) {
            this.loggedIn = false;
            console.log("Logged out");
            return true;
        }
        console.log("Already logged out");
        return false;
    }
}
// const e1 = new Employee("101","ashish","ashish@email","ashishPass","20000");
class Manager extends Employee {
    constructor(id, name, email, password, salary) {
        super(id, name, email, password, salary);
    }
    approveLeave() {
        console.log("Ja yrr lele chutti, maje kar.");
    }
}
class HR extends Employee {
    constructor(id, name, email, password, salary) {
        super(id, name, email, password, salary);
    }
    hireEmployee() {
        console.log("Sorry we can not hire you becasue I am not in mood today");
    }
}
class Devloper extends Employee {
    constructor(id, name, email, password, salary) {
        super(id, name, email, password, salary);
    }
    writeCode() {
        console.log("Koding !!!! ");
    }
}
const dev = new Devloper("101", "Ashish", "a@gmail.com", "123", "40000");
const hr = new HR("102", "Riya", "r@gmail.com", "123", "50000");
const manager = new Manager("103", "Raj", "raj@gmail.com", "123", "80000");
const employees = [dev, hr, manager];
for (const employee of employees) {
    employee.login(employee.email, "123");
}
//# sourceMappingURL=EmployeeManagementSystem.js.map