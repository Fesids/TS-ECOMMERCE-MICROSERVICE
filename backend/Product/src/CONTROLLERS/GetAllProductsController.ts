import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import {badRequest, ok} from "../UTILS/Helper"
import { IProductRepository } from "../DTO/ProductDTO";
import { IProduct } from "../MODELS/Product";

export class GetAllProductsController implements IController{

    constructor(private readonly repository: IProductRepository){}

    async handle(httpRequest: HttpRequest<unknown>): 
    Promise<HttpResponse<string | IProduct[]>> {
       try{
            const response = await this.repository.retrieveAll();

            if(!response.length){
                return badRequest("No product found");
            }

            return ok(response)
       }catch{
            return badRequest("Failed to retrieve list");
       }
    }
    
}