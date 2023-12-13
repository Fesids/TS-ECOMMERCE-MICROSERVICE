import { ok } from "assert";
import { ICartRepository } from "../DTO/CartDTO";
import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { ICart } from "../MODELS/Cart";
import { badRequest } from "../UTILS/Helper";
import { error } from "console";

export class GetCartByUserIdController implements IController{
    constructor(private readonly repository: ICartRepository){}
    async handle(httpRequest: HttpRequest<any>): 
    Promise<HttpResponse<string | ICart>> {
       try{
            const {userId} = httpRequest.params;

            if(!userId){
                return badRequest("No user ID provided");
            }

            const resp = await this.repository.retrieveByUserId(userId);

           return{
                body: resp,
                statusCode: 200
           }

       }catch(err){
            return badRequest("Something went wrong trying to retrieve cart")
       }
    }
    
}