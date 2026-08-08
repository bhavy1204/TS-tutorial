import { Router } from "express";
import { getProducts , getProduct} from "../controllers/product.controller.js";

const router = Router();

router.get("/all",getProducts);
router.get("/:id",getProducts);

export default router;