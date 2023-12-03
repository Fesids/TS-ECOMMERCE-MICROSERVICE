import { ICategory } from "../MODELS/category"

export interface CategoryDTO{
    name: string,
    
}

export interface CategoryResponse{
    
    _id: string,
    name: string,
    available: boolean
    
    
}

export interface ICategoryRepository{

   save(body:CategoryDTO): Promise<ICategory>;

   retrieveById(categoryId:string): Promise<ICategory>;

   retriveAll(): Promise<Array<ICategory>>;

}