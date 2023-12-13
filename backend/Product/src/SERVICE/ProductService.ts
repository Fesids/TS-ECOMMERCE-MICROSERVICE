import {Request, Response, NextFunction} from "express";
import { ProductRepository } from "../REPOSITORY/ProductRepository";
import { CreateProductController } from "../CONTROLLERS/CreateProductController";
import { GetProductByIdController } from "../CONTROLLERS/GetProductByIdController";
import { GetAllProductsController } from "../CONTROLLERS/GetAllProductsController";


export const getAllProducts = async (req:Request, res:Response) =>{

    const repository = new ProductRepository();

    const controller = new GetAllProductsController(
        repository
    );

    const {body, statusCode} = await controller.handle({

    });

    res.status(statusCode).json(body);

}

export const getProductById = async (req:Request, res:Response) =>{

    const repository = new ProductRepository();

    const controller = new GetProductByIdController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        params: req.params
    });

    res.status(statusCode).json(body);

}

export const createProductService = async (req:Request, res:Response) =>{

    const repository = new ProductRepository();

    const controller = new CreateProductController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        body: req.body,
        file: req.file?.filename
        
    });


    res.status(statusCode).json(body);



}