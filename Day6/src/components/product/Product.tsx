import { useState } from "react";

interface CardProps{
    children:React.ReactNode;
}

interface Products{
    name:string,
    price:number
}

const productList = [
  { name: "p1", price: 101 },
  { name: "p2", price: 101 },
  { name: "p3", price: 101 },
  { name: "p4", price: 101 },
  { name: "p5", price: 101 },
  { name: "p6", price: 101 },
];


function Card({children}:CardProps){

    const [products, setProducts]= useState<Products[]>([]);

    return(
        <div>
            {children}

            <button onClick={()=>setProducts(productList)}>Fetch</button>
            {products && products.map((item,index)=>(
                <div>
                    <p>-----------------------------------</p>
                    <li key={index}>{item.name}</li>
                    <li key={index}>{item.price}</li>
                </div>
            )) }
            {products && <button onClick={()=>setProducts([])}>delete</button> }
        </div>
    )
}

export default Card;

// React.ReactNode
// Represents basically anything React can render:
// React.ReactNode
// including:

// strings
// numbers
// elements
// fragments
// arrays
// null
// etc.
// JSX.Element

// Represents a React JSX element.

// For example:

// const element: JSX.Element = <div>Hello</div>;

// For children, use React.ReactNode.