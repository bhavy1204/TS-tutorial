function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));

function greet():void{
  return;
}

greet();

function throwError():never{
  throw new Error("An error occurred");
}

throwError();