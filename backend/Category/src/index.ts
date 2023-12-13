import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
import { MongoDBConnect } from "./DATABASE/MongoDBConnect";
import { categoryRoute } from "./ROUTES/CategoryRoutes";





const main = ()=>{
    config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    app.use("/api/v1/category", categoryRoute);
   

    const port = process.env.PORT || 8000;
    const mongoURL = process.env.MONGODB_URL || "mongodb://localhost:27017/"
    const dbName = process.env.database || "test";

    MongoDBConnect(mongoURL, dbName);


    app.listen(port, ()=>{
        console.log(`The server has started at port ${port}`)
    })

}

main();