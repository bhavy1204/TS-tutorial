
// Both will work the same

import { useState } from "react";

interface ProductCardProps{
    name:string,
    price:number,
    discount?:number
}

// type ProductCardProps = {
//   name: string;
//   price: number;
//   discount?: number;
// }




function ProductCard({name, price, discount}:ProductCardProps){
    const [number, setNumber]= useState(0);

    return(
        <div>
            <p>This is the Product card componenet. </p>
            <h2>{name}</h2>
            {/* <h3 onClick={()=>setNumber("ashish")}>{number}</h3> */}
            <h3 onClick={()=>setNumber((n)=>n+1)}>{number}</h3>
            <h2>{price}</h2>
            {discount && <h2>This is disount{discount}</h2>}
            {/* {<h2>This is disount{discount}</h2>} */}
        </div>
    )
}

export default ProductCard;