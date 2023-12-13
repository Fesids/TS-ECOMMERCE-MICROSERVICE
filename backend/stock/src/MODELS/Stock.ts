import { RowDataPacket } from "mysql2";

export interface Stock extends RowDataPacket{
    id: number,
    productId: number,
    productName: string,
    quantity: number,
    available: boolean
}