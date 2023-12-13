import {Router} from "express"
import { createCart, retrieveAll, retrieveByUserId } from "../SERVICE/CartService";



const routes = Router();


routes.post("", createCart);
routes.get("", retrieveAll);
routes.get("/user/:userId", retrieveByUserId);

export const cartRoutes = routes;