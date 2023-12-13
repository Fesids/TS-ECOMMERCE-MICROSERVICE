import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {config} from "dotenv";
import {Request, Response} from "express";
import {createProxyMiddleware, fixRequestBody} from "http-proxy-middleware"

import proxy from "express-http-proxy";
import httpProxy from "express-http-proxy";
import request from "request-promise-native";
import { Auth, isAdmin, isEmployee } from "./AuthenticationMiddleware/AuthenticationAlies";



const main = ()=>{
    config();
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());

    

    const port = process.env.PORT || 8002;
    const categoryService = httpProxy("http://127.0.0.1:8000/api/v1/category");
    
    

    const baseAPIRoute = "http://127.0.0.1:8000/api/v1/"

   

    const openEndpoints = [""]

    //// ** CATEGORY PROXY ** \\\\
    app.use("/api/v1/category/:categoryId",createProxyMiddleware({
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws:true,
    
        //pathRewrite: {"^/api/v1/"}
    }));

    app.use("/api/v1/category",createProxyMiddleware({
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws:true,
    
        //pathRewrite: {"^/api/v1/"}
    }));



    //// ** AUTH PROXY ** \\\\
    app.use("/api/v1/auth/user", createProxyMiddleware({
        target: "http://127.0.0.1:8001/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));


    app.use("/api/v1/auth/login", createProxyMiddleware({
        target: "http://127.0.0.1:8001/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));

    app.use("/api/v1/auth/register/:role", createProxyMiddleware({
        target: "http://127.0.0.1:8001/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));


    //// ** PRODUCT PROXY ** \\\\
    app.use("/api/v1/product/", createProxyMiddleware({
        target: "http://127.0.0.1:8003/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));

    app.use("/api/v1/product/:productId", createProxyMiddleware({
        target: "http://127.0.0.1:8003/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));


    //// ** STOCK PROXY ** \\\\
    app.use("/api/v1/stock", createProxyMiddleware({
        target: "http://127.0.0.1:8004/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));
    

    app.use("/api/v1/stock/check/:id", createProxyMiddleware({
        target: "http://127.0.0.1:8004/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));


    //// ** CART PROXY ** \\\\

    app.use("/api/v1/cart", createProxyMiddleware({
        target: "http://127.0.0.1:8006/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));

    app.use("/api/v1/cart/user/:userId", createProxyMiddleware({
        target: "http://127.0.0.1:8006/",
        changeOrigin: true,
        onProxyReq: fixRequestBody,
        ws: true
    }));



    app.listen(port, ()=>{
        console.log(`The gateway has started at port ${port}`)
    })

}

main();