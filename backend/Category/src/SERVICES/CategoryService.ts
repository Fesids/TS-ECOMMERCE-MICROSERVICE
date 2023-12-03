import {Request, Response} from "express";
import { CategoryRepository } from "../REPOSITORY/CategoryRepository";
import { CreateCategoryController } from "../CONTROLLERS/CreateCategoryController";
import { RetrieveCategoryController } from "../CONTROLLERS/RetrieveCategoryController";
import { GetAllCategoriesController } from "../CONTROLLERS/GetAllCategoriesController";


export const TesteProxy = (req:Request, res:Response)=>{

    res.json("Teste proxy");
}

export const getAllCategories = async (req:Request, res:Response) =>{

    const repository = new CategoryRepository();

    const controller = new GetAllCategoriesController(
        repository
    );

    const {body, statusCode} = await controller.handle({

    });

    res.status(statusCode).json(body);



}

export const getCategoryById = async (req:Request, res:Response) =>{

    const repository = new CategoryRepository();

    const controller = new RetrieveCategoryController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        params: req.params
    });

    res.status(statusCode).json(body);

}

export const createCategoryService = async (req:Request, res:Response) =>{

    const repository = new CategoryRepository();

    const controller = new CreateCategoryController(
        repository
    );

    const {body, statusCode} = await controller.handle({
        params: req.params,
        body: req.body
    });

    res.status(statusCode).json(body);



}