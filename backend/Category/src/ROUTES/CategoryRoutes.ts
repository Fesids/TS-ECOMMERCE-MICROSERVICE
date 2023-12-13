import {Router} from "express";
import { TesteProxy, createCategoryService, getAllCategories, getCategoryById } from "../SERVICES/CategoryService";
import {} from "express-http-proxy"
const app = Router();

app.post("", createCategoryService);
app.get("/:categoryId", getCategoryById);
app.get("",  getAllCategories);
app.get("/testezin", TesteProxy);

export const categoryRoute = app;