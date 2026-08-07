// Classes
type loginable={
    login():void;
    isLoggedIn():boolean;
}

class User implements loginable {
  public name: string;
  public email: string;
  protected salary: string;
  private password;

  constructor(name: string, email: string, password: string, salary: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.salary = salary;
  }

  login() {
    console.log("Login function");
  }

  isLoggedIn(): boolean {
      return true;
  }

  printSalary() :void{
    console.log(this.salary);
  }
}

class Employee extends User {
  public dept: string;
  constructor(
    dept: string,
    name: string,
    email: string,
    password: string,
    salary: string,
  ) {
    super(name, email, password, salary);
    this.dept = dept;
  }

  printSalary(): void {
      console.log(this.salary);
    //   this.password
  }


  
}

const user = new User("Ashish", "Ashish@email", "MyPass", "12000");

user.login();

// user.password="hksdkv"

abstract class Animal{
    abstract makeSound():void;
}

class Cat extends Animal{
    makeSound(): void {
        console.log("Meow")
    }
}





