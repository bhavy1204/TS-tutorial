//--------------------------------------------------------------------
// unions
// A OR B
// type Admin = {
//   readonly role: "Admin";
//   permissions: string[];
// };
// type Customer = {
//   readonly role: "customer";
//   wishlist: string[];
// };
// type User = Admin | Customer;
// But the cutomer does not have the permissions so this
// function print(user:User){
//     console.log(user.permission)
// }
// will give error , to fix this we have Narrowing.
//-------------------------------------------------------------------------
// literal types
// let role: "admin" | "staff" | "customer" | "support";
// role="ashish";
// role = "admin";
//-------------------------------------------------------------------
// Intersection types
// A AND B
// type Person = {
//   name: string;
//   readonly id: number;
// };
// type Employee={
//     dept:string
// }
// type Staff = Person & Employee;
// const staff:Staff={
//     name:"ashish",
//     id:120,
//     dept:"CS"
// }
//------------------------------------------------------------------------
// enums
// enum Role {
//   Admin = "ADMIN",
//   Seller = "SELLER",
//   Customer = "CUSTOMER",
// }
// Literal Types
// "admin"
// Pros
// lighter
// preferred in modern TS
// better inference
// Enums
// Pros
// grouped constants
// readable
// common in older codebases
// good when values are reused everywhere
// Modern TypeScript often prefers:
// type Role =
//     | "admin"
//     | "seller"
//     | "customer";
// over enums unless you specifically want named constants.
//--------------------------------------------
// GENERICS
// when we do
// function identity(value: any) {
//   return value;
// }
// WE lose the type at all.
// insted we do
function identify(value) {
    return value;
}
// T => Whatever type comes in... comes back out.
function identify2(value) {
    return value[0];
}
let role = "admin";
if (role === "admin") {
    console.log("admin");
}
// instance of
class DOg {
    sound = "bark";
    owner = "someone";
}
class Cat {
    sound = "meowwww ";
}
let animal = new DOg();
if (animal instanceof DOg) {
    console.log(animal.owner);
}
let user;
function getUser(user) {
    if ("permissions" in user) {
        console.log("You are allowed to do some stuff ");
    }
    return user;
}
//--------------------------------------------
// TypeOF
function print(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
export {};
//# sourceMappingURL=index.js.map