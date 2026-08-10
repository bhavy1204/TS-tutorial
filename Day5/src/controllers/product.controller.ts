import type { Request, Response, NextFunction } from "express";
import type { Product } from "../models/product.js";
import { products } from "../models/product.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

interface ProductParams {
  id: string;
}

interface CreateProduct{
  name:string
}

export const CreateProduct = AsyncHandler(async(req: Request<{},{},CreateProduct>, res: Response) => {
  const { name } = req.body;
  const product: Product = { id: String(Date.now()), name };

  products.push(product);

  res.status(201).json(
    product
  )
});

export const getAllProducts = AsyncHandler(async(req:Request,res:Response)=>{
    res.status(200).json({
      products
    })
})

export const getProduct = AsyncHandler(async(req:Request<ProductParams>,res:Response)=>{

    const id = req.params.id;
    const result = products.find((p)=> p.id === id);
    res.status(200).json({
      result
    })
    
})