import { Router } from "express";
import { CreateProduct, getAllProducts, getProduct} from "../controllers/product.controller.js";

const router = Router();

router.get("/create",CreateProduct);
router.get("/getall",CreateProduct);
router.get("/get/:id",getProduct);

export default router;