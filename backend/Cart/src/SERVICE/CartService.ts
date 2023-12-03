import {Request, Response, NextFunction} from "express";
import { CartRepository } from "../REPOSITORY/CartRepository";
import { SaveCartController } from "../CONTROLLERS/SaveCartController";
import { GetCartByUserIdController } from "../CONTROLLERS/GetCartByUserIdController";
import { GetAllCartsController } from "../CONTROLLERS/GetAllCartsController";






export const retrieveAll = async (req:Request, res:Response) =>{

    const repository = new CartRepository();

    const controller = new GetAllCartsController(
        repository
    );

    const {body, statusCode} = await controller.handle(
       {

       }
    );

    res.json(body).status(statusCode);




}


export const retrieveByUserId = async (req:Request, res:Response) =>{

    const repository = new CartRepository();

    const controller = new GetCartByUserIdController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        params: req.params
    });

    res.json(body).status(statusCode);


}

export const createCart = async (req:Request, res:Response) =>{

    const repository = new CartRepository();

    const controller = new SaveCartController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        body: req.body,
        //file: req.file?.filename
        
    });


    res.status(statusCode).json(body);



}