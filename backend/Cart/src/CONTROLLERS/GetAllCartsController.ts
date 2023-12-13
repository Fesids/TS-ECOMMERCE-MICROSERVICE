import { ICartRepository } from "../DTO/CartDTO";
import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { ICart } from "../MODELS/Cart";
import { badRequest, ok } from "../UTILS/Helper";

export class GetAllCartsController implements IController{
    constructor(private readonly repository: ICartRepository){}
    async handle(httpRequest: HttpRequest<any>): 
    Promise<HttpResponse<string | ICart[]>> {
       try{
            const resp = await this.repository.retrieveAll();

            if(!resp.length){
                return badRequest("No Cart found")
            }

            return ok(resp)
       }catch(err){
            return badRequest("Something went wrong when trying to retrieve cart list");
       }
    }

    
}