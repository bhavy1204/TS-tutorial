import express from "express";

import ProductRoute from "./routes/product.route.js";

import { globalErrorHandler } from "./middleware/error.middleware.js";
import { logger } from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());


app.use(logger);

app.use("/api/v1/product", ProductRoute);

app.use(globalErrorHandler);

export default app;
