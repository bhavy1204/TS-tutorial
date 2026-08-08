import express  from "express";
import type { Request,Response } from "express";
import { logger } from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());

app.use(logger);

import products from "./routes/product.route.js"

app.use("/api/products",products)

// not necessarly needed but good for understanding the types.
app.get("/",(req:Request,res:Response)=>{
    res.json({
        message:"Welcome to TS server"
    })
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server up and running at ${PORT}`)
})





