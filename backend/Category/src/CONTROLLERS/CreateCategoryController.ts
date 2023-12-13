import { CategoryDTO, ICategoryRepository } from "../DTO/CategoryDTO";
import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { ICategory } from "../MODELS/category";
import { badRequest, created, ok } from "../UTILS/Helper";

export class CreateCategoryController implements IController{
    constructor(private readonly categoryRepository: ICategoryRepository){}
    async handle(httpRequest: HttpRequest<CategoryDTO>): 
    Promise<HttpResponse<ICategory | string>> {
        try{
          const category = await this.categoryRepository.save(httpRequest.body);

          return created(category);
        }catch(err){
            return badRequest("something went wrong");

        }
    }
    
}