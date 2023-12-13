import { ICategoryRepository } from "../DTO/CategoryDTO";
import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { ICategory } from "../MODELS/category";
import { badRequest, ok } from "../UTILS/Helper";

export class RetrieveCategoryController implements IController{
    constructor(private readonly categoryRepository: ICategoryRepository){}
    async handle(httpRequest: HttpRequest<any>): 
    Promise<HttpResponse<ICategory | string>> {
        try{

            const {categoryId} = httpRequest.params;

            if(!categoryId){
                return badRequest("Category id not provided")
            }

            const category = await this.categoryRepository.retrieveById(categoryId);

            return ok(category)


        }catch(err){

            return badRequest("Something went wrong when trying retrieve category");

        }
        
    }
    
}