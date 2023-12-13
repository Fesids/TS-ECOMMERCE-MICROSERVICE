//import Tutorial, { IProduct } from "../MODELS/Product"

import { IProduct } from "../MODELS/Product";


export interface ProductDTO{
    name: string,
    description: string,
    productImage: string,
    price: number,
    category: number

}


export interface IProductRepository{

    save(body: ProductDTO): Promise<String>;

    retrieveById(id: number): Promise<IProduct>;

    retrieveAll(): Promise<Array<any>>
    //saveTeste(tutorial: Tutorial): Promise<Tutorial>

}




