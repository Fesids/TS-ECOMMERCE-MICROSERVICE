import { HttpRequest, HttpResponse, IController } from "../../../stock/src/DTO/ComunProtocols";
import { badRequest, ok } from "../../../stock/src/UTILS/Helper";
import { ICategoryRepository } from "../DTO/CategoryDTO";
import { ICategory } from "../MODELS/category";

export class GetAllCategoriesController implements IController{
    constructor(private readonly repository: ICategoryRepository){}
    async handle(httpRequest: HttpRequest<unknown>): 
    Promise<HttpResponse<string | Array<ICategory>>> {
        try{
            const categories = await this.repository.retriveAll();

            if(!categories.length){
                return badRequest("No category found");
            }

            return ok(categories);
        }catch{
            return badRequest("Failed to retrieve category");
        }
    }
    
}