import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
//import Database from "./DATABASE/PostgresDBConnection";
import { productRoutes } from "./ROUTES/ProductRoute";



const main = () => {
    config();
    const app = express()
    app.use(express.json())
    app.use(cors())
    app.use(cookieParser())

    const port = process.env.PORT || 8003;

    app.use("/api/v1/product", productRoutes);



    app.listen(port, ()=>{
        console.log(`The product service started at port ${port}`);
    })



}

main()