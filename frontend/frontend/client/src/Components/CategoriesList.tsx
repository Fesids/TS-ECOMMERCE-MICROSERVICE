import { useSelector } from "react-redux"

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAppDispatch, useAppSelector } from "../STORE/store"
import { fetchCategories, selectAllCategories } from "../STORE/features/categorySlice"
import { fetchProductById, fetchProducts, selectAllProducts } from "../STORE/features/productSlice"
import { IProduct } from "../MODELS/Product"
import axios from "axios"

export const CategoriesList = () =>{


    const [productBody, setProductBody] = useState({} as any);
    const dispatch = useAppDispatch()
    const categories = useSelector(selectAllCategories)
    const products = useSelector(selectAllProducts);

    const [prods, setProds] = useState([] as Array<IProduct>);

    
    
    useEffect(()=>{
        dispatch(fetchCategories())
        
    }, []);
    

    useEffect(()=>{
        dispatch(fetchProducts());
        dispatch(fetchProductById(1)).unwrap()
        .then((orginalPromiseResult) => {
            setProductBody(orginalPromiseResult);
    })
    }, [])



    console.log(categories);
    console.log(products);
    console.log(productBody);
    

    return(
        <div>
            list
        </div>
    )
}