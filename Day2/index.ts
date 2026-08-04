// array

const data: (number | string)[] = ["apple", "banana", "cherry"];

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

function getUser(): [string, number] {
  return ["bhavy", 22];
}

// -----------------------------------------------------------------------

// objects

const student: {
  readonly collegeId: string;
  name: string;
  age: number;
  class: {
    sem: number;
    id: string;
  };
  phone?: string;
} = {
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

function greet(name: string): string {
  return `Hello ${name}`;
}

function addNum(a: number, b = 0): number {
  return a + b;
}

// optional
function greet2(name: string, city?: string): string {
  return "";
}

function demo(name = "ashish"): string {
  return `Hello ${name}`;
}

console.log(demo());
console.log(demo("bhavy"));

function sum(...nums: number[]): number {
  // let total="";
  let total: number = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

// ----------------------------------------------------------------------------------

// types

// type user = {
//   name: string;
//   email: string;
//   age: number;
//   isVerified: boolean;
//   phone?: string;
// };

// const user:user ={
//     name:"ashish",
//     email:"asc@email",
//     age:22,
//     isVerified:true
// }

// interface

// interface user {
//     name: string;
//     email: string;
//     age: number;
//     isVerified: boolean;
//     phone?: string;
// }

// similarity btw type and interface ->
// 1 Both can define object shapes.

// difference
// 1 extension

interface person {
  name: string;
  email: string;
  age: number;
}

interface student extends person {
  roll: number;
  readonly collegeId: string;
}

// in type we do
// type Person = {
//   name: string;
// };

// type Student = Person & {
//   roll: number;
// };

// 2. Declaration merging

interface user {
  name: string;
}

interface user {
  age: number;
}

// TS merges them automatically, but doing this in type give error..

// type user {
//   name: string;
// }

// type user {
//   age: number;
// }

// 3. type can represent more than objects,

type role = "admin" | "user" | "seller";

type add = (a: number, b: number) => number;

type result = string | number;

type point= [number,number];

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




















