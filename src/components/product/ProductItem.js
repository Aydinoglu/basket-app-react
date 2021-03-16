import { GlobalContext } from "../context/GlobalContext";
import {useContext} from 'react';

const ProductItem =({product})=>{
    const {addBasket} = useContext(GlobalContext)
    return (
        <li>{product.productName} <button onClick={()=>addBasket(product)}>Sepete ekle</button> </li>
    )
}

export default ProductItem;