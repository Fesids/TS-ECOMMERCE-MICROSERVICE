import { IProduct } from "../../MODELS/Product";
import style from "../../../public/css/Product.module.scss"
import { Button } from "../ReusableComponents/Button";
import { Link } from "react-router-dom";


interface LatestProductProps{

    data: IProduct

}

export const Product = ({data}: LatestProductProps) =>{

    return(
        <div className={style.product}>
            <div className={style.productImage}>
                <img src={data.productImage}/>
            </div>
            <h5 className={style.productName}><Link to={`/products/${data.category}/all/${data.id}`}>{data.name}</Link></h5>
            <p className={style.productPrice}>R$ {data.price}</p>
            <div className={style.addButtonContainer}>
                <Button content="add to cart"/>
            </div>
            
        </div>

    )

}