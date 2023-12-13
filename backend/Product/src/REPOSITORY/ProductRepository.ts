import { IProductRepository, ProductDTO } from "../DTO/ProductDTO";
import { IProduct, ProductPool } from "../MODELS/Product";
//import Tutorial, { IProduct, ProductPool } from "../MODELS/Product";

export class ProductRepository implements IProductRepository{

    async retrieveAll(): Promise<Array<any>> {
        const q = "select * from products";

        const {rows} = await ProductPool.query<IProduct[]>(q);

       
        console.log(rows);
        //return products.rows;
        return rows;

    }

    async retrieveById(id: number): Promise<IProduct> {
        const q = "select * from products where id = $1";

        const product = await ProductPool.query(q, [id]);

        if (!product){
            throw new Error("No product with the provided ID found")
        }

        //return product.rows;
        const {rows} = product
        //console.log(product);
        rows[0].id
        console.log(rows[0].id)
        const prodBody = {
            id: rows[0].id,
            name: rows[0].name,
            description: rows[0].description,
            productImage: rows[0].productimage,
            price: rows[0].price,
            category: rows[0].category
        }
       
        return prodBody;
    }
    


    async save(body: ProductDTO): Promise<String> {

        const {name, description, productImage, price, category}= body;

        await ProductPool.query("INSERT INTO products(name, description, productimage, price, category) VALUES ($1, $2, $3, $4, $5)", [name, description, productImage, price, category]);
        return "Product created successfully";

        

     
    }
    
}