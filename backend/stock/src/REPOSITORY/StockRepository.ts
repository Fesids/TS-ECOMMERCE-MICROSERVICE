import { MySQLPool } from "../DATABASE/MySQLDBConnect";
import { IStockRepository, StockDTO } from "../DTO/StockDTO";
import { Stock } from "../MODELS/Stock";

export class StockRepository implements IStockRepository{

    async retrieve(id: number): Promise<Stock> {

        let q = "select * from stock where id = ?";

        const stock = await MySQLPool.query<Stock[]>(q, [id]);

        if(!stock){
            throw new Error("No product Found");
        }

        return stock[0][0];
                //throw new Error("Method not implemented.");
    }

    async checkAvailibility(id: number): Promise<boolean> {
        
        let q = "select * from stock where productId = ?";

        let stockAvailable = await MySQLPool.query<Stock[]>(q, [id]);

        const stockProdQuantity = stockAvailable[0][0].quantity;
        const stockIsAvailable = stockAvailable[0][0].available;

        if(stockIsAvailable == false){
            //throw new Error("Stock are not available");
            return false;
        }

        else if(stockIsAvailable == true && stockProdQuantity<1){
            //throw new Error("Stock has no product in");
            return false;
        }

        return true;

    }

    async save(data: StockDTO): Promise<string>{

        const {productId, productName, available, quantity} = data;

        let q = "select * from stock where productId=?";

        let [rows] = await MySQLPool.query<Stock[]>(q,[data.productId]);

        if(rows.length){
            throw new Error('Product is already on stock');
        }

        try{
            q = "insert into stock(productId, productName, quantity, available) values(?,?,?,?)";
            await MySQLPool.query<Stock[]>(q, [productId, productName, quantity, available]);
            return "Stock successfully created";
        }catch{
            return "Stock creation failed"
        }


    }

}