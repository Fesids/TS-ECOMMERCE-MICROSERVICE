import { DoubleDataType } from "sequelize";
import {Model, Table, Column, DataType} from "sequelize-typescript";
import {Pool} from "pg"

export const CartPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "cart_node_db",
    password: "67890000",
    port: 5433
})



export interface ICart{
    id: number,
    userid: number,
    products: Array<any>
}



