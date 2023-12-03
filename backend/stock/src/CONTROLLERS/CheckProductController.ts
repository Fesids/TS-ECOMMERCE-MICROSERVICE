import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { IStockRepository } from "../DTO/StockDTO";
import { badRequest, ok } from "../UTILS/Helper";


export class CheckProductController implements IController{
    constructor(private readonly stockRepository:IStockRepository){}
    async handle(httpRequest: HttpRequest<any>): 
    Promise<HttpResponse<string | boolean>> {
        try{
            const {id} = httpRequest.params;

            if (!id){
                return badRequest("No ID provided");
            }

            const resp = await this.stockRepository.checkAvailibility(id);

            return ok(resp);
        }catch{
            return badRequest("something went wrong trying check product availability");
            
        }
    }

}