import type { Request,Response } from "express";

interface ProductParams{
    id:string
}

interface CreateProduct{
    name:string,
    price:number
}

export const getProducts = (req:Request,res:Response):void =>{
    const products = [
      {
        id: 1,
        name: "Laptop",
        price: 60000,
      },
      {
        id: 2,
        name: "Phone",
        price: 30000,
      },
    ];

     res.status(200).json(products);
}

export const getProduct =(req:Request<ProductParams>,res:Response):void=>{
    const id = req.params.id;

    res.json({
      productId: id,
    });
}



// Request<Params, ResBody, ReqBody>;


export const createProdcut = (req:Request<{},{},CreateProduct> ,res:Response):void=>{
    const {name,price}= req.body;

    res.status(201).json({
        name,
        price
    })
}



