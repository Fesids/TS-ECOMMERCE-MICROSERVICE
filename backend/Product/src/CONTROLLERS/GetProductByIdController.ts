import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { IProductRepository } from "../DTO/ProductDTO";
import { IProduct } from "../MODELS/Product";
import { badRequest, ok } from "../UTILS/Helper";

export class GetProductByIdController implements IController{
    constructor(private readonly productRepository: IProductRepository){}
    async handle(httpRequest: HttpRequest<any>): 
    Promise<HttpResponse<IProduct | string>> {
       
        try{

            const {id} = httpRequest.params;

            if(!id){
                return badRequest("No ID provided")
            }

            const product = await this.productRepository.retrieveById(id);

            return ok(product);

        }catch(err){
            return badRequest("Something went wrong trying to retrive product")
        }

    }
    
}