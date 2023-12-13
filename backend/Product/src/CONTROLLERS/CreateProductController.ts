import { HttpRequest, HttpResponse, IController } from "../DTO/ComunProtocols";
import { IProductRepository, ProductDTO } from "../DTO/ProductDTO";
import { IProduct } from "../MODELS/Product";
import { badRequest, created } from "../UTILS/Helper";

export class CreateProductController implements IController{
    constructor(private readonly productRepository: IProductRepository){}
    async handle(httpRequest: HttpRequest<ProductDTO>):
     Promise<HttpResponse<IProduct | string>> {
        const serverPath = "http://127.0.0.1:3001/"
        if(httpRequest.body){
            try{
            
                const saveBody:ProductDTO = {
                    name: httpRequest.body.name,
                    description: httpRequest.body.description,
                    productImage: serverPath+httpRequest.file,
                    price: httpRequest.body.price,
                    category: httpRequest.body.category
                }
                
                const product = await this.productRepository.save(saveBody);
    
                return created(product);
            }catch(err){
                return badRequest("Something went wrong trying to create product");
            }
    
        
    
    
        }

        return badRequest("No body provided")
    
        }





}