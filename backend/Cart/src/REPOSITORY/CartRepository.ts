

//import Tutorial, { IProduct, ProductPool } from "../MODELS/Product";

import { ARRAY, INTEGER } from "sequelize";
import { CartDTO, ICartRepository } from "../DTO/CartDTO";
import { CartPool, ICart } from "../MODELS/Cart";
import { array } from "prop-types";
import {Request, Response} from "express";




export class CartRepository implements ICartRepository{

    async retrieveAll(): Promise<Array<any>> {
        const q = "select * from cart";

        const {rows} = await CartPool.query<ICart[]>(q);

       
       return rows;

    }

    async retrieveByUserId(id: number): Promise<ICart> {
        const q = "select * from cart where userid = $1";

        const cart = await CartPool.query<ICart>(q, [id]);

        if (!cart){
            throw new Error("No cart with the provided ID found")
        }

        //return product.rows;
        const {rows} = cart
        //console.log(product);
        
        //console.log(rows[0].id)
        const cartBody = {
            id: rows[0].id,
            userid: rows[0].userid,
            products: rows[0].products,
            
        }
       
       // return prodBody;

        return cartBody;
    }
    


    async save(body: CartDTO): Promise<String> {

        //let arr= ARRAY[1, 2, 3];

        /*for(var i in body.products){
            arr = 
        }*/

        const {userId, products}= body;

        //const r = ARRAY['1', '2', '3']::INTEGER[]
        /*r.push(1)
        r.push(2)*/


        await CartPool.query("INSERT INTO Cart(userid, products) VALUES ($1, $2)", [body.userId, body.products]);
        //await CartPool.query("INSERT INTO testeArr(arr) VALUES ($1)", ['{"1"}']);
        return "Product created successfully";

    }
}