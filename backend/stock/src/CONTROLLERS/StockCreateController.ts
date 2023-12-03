import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { IStockRepository, StockDTO } from "../DTO/StockDTO";
import { badRequest, created, ok } from "../UTILS/Helper";

export class StockCreateController implements IController{
    constructor(private readonly stockRepository: IStockRepository){}
    async handle(httpRequest: HttpRequest<StockDTO>): 
    Promise<HttpResponse<string>> {
       try{
            const {body} = httpRequest;

            if(!body){
                return badRequest("No body provided")
            }

            const response = await this.stockRepository.save(body);

            return created(response);

       }catch{
            return badRequest("Failed to create stock slot");
       }
    }

}