import { DoubleDataType } from "sequelize";
import {Model, Table, Column, DataType} from "sequelize-typescript";
import {Pool} from "pg"

export const ProductPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "node_product_db",
    password: "67890000",
    port: 5432
})



export interface IProduct{
    id: number,
    name: string,
    description: string,
    productImage: string,
    price: number,
    category: number

}



