// array
const data = ["apple", "banana", "cherry"];
// array of ojects
// const student:{
//     name:string,
//     roll:number,
// }[]=[
//     {
//         name:"bhavy",
//         roll:53
//     },
//     {
//         roll:12,
//         name:"ashish"
//     }
// ]
// ---------------------------------------------------------------------------
// tuples
// wrong
// const tuples:[string, number]= [
//     "bhavy",12,"ashish"
// ]
// Type '[string, number, string]' is not assignable to type '[string, number]'.
//   Source has 3 element(s) but target allows only 2.
//  const tuples:[string, number]= [
//     12,"ashish"
// ]
// right
//  const tuples:[string, number]= [
//     "ashish",12
// ]
function getUser() {
    return ["bhavy", 22];
}
// -----------------------------------------------------------------------
// objects
const student = {
    collegeId: "college123",
    name: "ashish",
    age: 22,
    class: {
        sem: 6,
        id: "abcd",
    },
};
// illegal
// student.collegeId ="1231"
student.phone = "19382720";
// --------------------------------------------------------------------------------
// funtions
function greet(name) {
    return `Hello ${name}`;
}
function addNum(a, b = 0) {
    return a + b;
}
// optional
function greet2(name, city) {
    return "";
}
function demo(name = "ashish") {
    return `Hello ${name}`;
}
console.log(demo());
console.log(demo("bhavy"));
function sum(...nums) {
    // let total="";
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}
export {};
// interface mainly describe object's shape and can describe callable/construct signatures, but it isn't used for unions or primitive aliases
// Use interface for objects that represent entities (User, Product, Todo, API payloads).
// API responses
// Props
// User objects
// Product objects
// Database models
// Classes
// Use type when you need unions, tuples, or function signatures.
// Unions
// Function types
// Tuples
// Utility combinations
//# sourceMappingURL=index.js.map