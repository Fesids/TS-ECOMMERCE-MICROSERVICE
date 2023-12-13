import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
import { cartRoutes } from "./ROUTES/CartRoute";




const main = () => {
    config();
    const app = express()
    app.use(express.json())
    app.use(cors())
    app.use(cookieParser())

    const port = process.env.PORT || 8006;

    app.use("/api/v1/cart", cartRoutes);

    //new Database();


    app.listen(port, ()=>{
        console.log(`The product service started at port ${port}`);
    })



}

main()