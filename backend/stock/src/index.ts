import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
import { stockRouter } from "./ROUTES/StockRoutes";




const main = () => {
    config();
    const app = express()
    app.use(express.json())
    app.use(cors())
    app.use(cookieParser())

    const port = process.env.PORT || 8004;

    

    app.use("/api/v1/stock", stockRouter);


    app.listen(port, ()=>{
        console.log(`The product service started at port ${port}`);
    })



}

main()