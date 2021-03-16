import {GlobalContext} from '../context/GlobalContext'
import {useContext} from 'react';

const BasketList = ()=>{
    let {basketProducts} = useContext(GlobalContext);

    return(
         <ul>
             {basketProducts.map((product,index) => <li key={index}>{product.productName}</li>)}
        </ul>
    )
}

export default BasketList;