import {Response, Request, NextFunction} from "express";
import { StockRepository } from "../REPOSITORY/StockRepository";
import { StockCreateController } from "../CONTROLLERS/StockCreateController";
import { CheckProductController } from "../CONTROLLERS/CheckProductController";


export const CheckProductAvailability = async (req:Request, res:Response) =>{

    const repository = new StockRepository();

    const controller = new CheckProductController(
        repository
    );

    const {statusCode, body} = await controller.handle({
        params: req.params
    });

    return res.status(statusCode).json(body);

}

export const StockCreate = async (req:Request, res:Response) =>{

    const repository = new StockRepository();

    const controller = new StockCreateController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        body: req.body
    });

    res.status(statusCode).json(body);


}