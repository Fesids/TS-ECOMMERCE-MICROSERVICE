//import Tutorial, { IProduct } from "../MODELS/Product"

import { ICart} from "../MODELS/Cart";


export interface CartDTO{
    userId: number,
    products: number[]

}


export interface ICartRepository{

    save(body: CartDTO): Promise<String>;

    retrieveByUserId(id: number): Promise<ICart>;

    retrieveAll(): Promise<Array<any>>
    //saveTeste(tutorial: Tutorial): Promise<Tutorial>

}




