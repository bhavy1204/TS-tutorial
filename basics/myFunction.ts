function add5(n:number,name:string="hello"):number{
    // return n +5;
    let res :number= n +5;
    // return "hello";
    return res;
}

// add5("a")
add5(3)
add5(3,"NEw value")

let arr1 = ["helol", "b", "c"];

let arr2 = [1,"hello",3,4,4,true,5]

arr2.map((el:string | number | boolean)=>{
    return `This is val ${el}`
})


function consoleError(err:string):void{
    // return 1;
    console.log(err);
}

// There is also called something "never" which is similar to void. It is used in sceanrios like throwing the error.

function hanndleError(err:string):never{
    throw new Error(err);
    
}

