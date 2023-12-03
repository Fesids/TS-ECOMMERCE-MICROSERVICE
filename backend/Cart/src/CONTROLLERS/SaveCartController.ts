
import { CartDTO, ICartRepository } from "../DTO/CartDTO";
import {HttpRequest, HttpResponse, IController} from "../DTO/ComunProtocols"
import {badRequest, ok, created} from "../UTILS/Helper"


export class SaveCartController implements IController{

    constructor(private readonly cartRepository: ICartRepository){}
    async handle(httpRequest: HttpRequest<CartDTO>): 
    Promise<HttpResponse<string>> {
        try{
            const {body} = httpRequest;

            if(!body){
                return badRequest("No body provided")
            }

            const response = await this.cartRepository.save(body);
            return created(response);
        }catch(err){
            return badRequest("Failed to create cart")
        }
    }
}