interface Loginable {
  canLogin(): boolean;
}

abstract class Employee implements Loginable {
  protected loggedIn: boolean;
  constructor(
    readonly id: string,
    public name: string,
    public email: string,
    private password: string,
    protected salary: string,
  ) {
    this.loggedIn = false;
  }

  canLogin(): boolean {
    return true;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string): Employee | undefined {
    if (!this.canLogin()) {
      console.log("I am not loginable");
      return undefined;
    }
    if (this.email === email && this.password === password) {
      this.loggedIn = true;
      console.log("Logged In");
      return this;
    } else {
      console.log("Login fail");
      return undefined;
    }
  }

  logout(): boolean {
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
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    salary: string,
  ) {
    super(id, name, email, password, salary);
  }

  public approveLeave() {
    console.log("Ja yrr lele chutti, maje kar.");
  }
}

class HR extends Employee {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    salary: string,
  ) {
    super(id, name, email, password, salary);
  }

  public hireEmployee() {
    console.log("Sorry we can not hire you becasue I am not in mood today");
  }
}

class Devloper extends Employee {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    salary: string,
  ) {
    super(id, name, email, password, salary);
  }

  public writeCode() {
    console.log("Koding !!!! ");
  }
}

const dev = new Devloper("101", "Ashish", "a@gmail.com", "123", "40000");

const hr = new HR("102", "Riya", "r@gmail.com", "123", "50000");

const manager = new Manager("103", "Raj", "raj@gmail.com", "123", "80000");

const employees: Employee[] = [dev, hr, manager];

for (const employee of employees) {
  employee.login(employee.email, "123");
}