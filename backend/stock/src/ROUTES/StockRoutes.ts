import {Router, Request, Response} from "express";
import { CheckProductAvailability, StockCreate } from "../SERVICE/ProductService";

const router = Router();

const teste = (req:Request, res:Response) =>{
    return "teste"
}
router.post("", StockCreate);
router.get("/check/:id", CheckProductAvailability);
router.get("/teste", teste);

export const stockRouter = router;