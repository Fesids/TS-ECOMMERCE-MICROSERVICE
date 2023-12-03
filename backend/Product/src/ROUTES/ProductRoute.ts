import {Router} from "express"
import { createProductService, getAllProducts, getProductById } from "../SERVICE/ProductService";
import { uploadFile } from "../UPLOADCONFIG/Upload";

const routes = Router();


routes.post("", uploadFile.single("productImage"),createProductService);
routes.get("", getAllProducts);
routes.get("/:id", getProductById);

export const productRoutes = routes;