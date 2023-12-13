import { Stock } from "../MODELS/Stock";

export interface StockDTO{
    productId: number,
    productName: string,
    quantity: number,
    available: boolean
}



export interface IStockRepository{

    save(data: StockDTO): Promise<string>;

    checkAvailibility(id: number): Promise<boolean>;

    retrieve(id: number): Promise<Stock>;

}