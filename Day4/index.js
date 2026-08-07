"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    salary;
    password;
    constructor(name, email, password, salary) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.salary = salary;
    }
    login() {
        console.log("Login function");
    }
    isLoggedIn() {
        return true;
    }
    printSalary() {
        console.log(this.salary);
    }
}
class Employee extends User {
    dept;
    constructor(dept, name, email, password, salary) {
        super(name, email, password, salary);
        this.dept = dept;
    }
    printSalary() {
        console.log(this.salary);
        //   this.password
    }
}
const user = new User("Ashish", "Ashish@email", "MyPass", "12000");
user.login();
// user.password="hksdkv"
class Animal {
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}
//# sourceMappingURL=index.js.map