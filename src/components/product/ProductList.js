import {useState,useEffect} from 'react';
import ProductItem from './ProductItem';

const ProductList = ({selectedCategory})=>{
    const [products, setProducts] = useState([])
    let urlProduct = "http://localhost:3000/products";

    useEffect(() => {
        getProducts(urlProduct,selectedCategory);
    }, [urlProduct,selectedCategory])

    const getProducts = async (url,selectedCategory)=>{
        if(selectedCategory){
            url += "/?categoryId=" + selectedCategory;
        }
            let response = await fetch(url);
            let data = await response.json();
            setProducts(data);
       }
  
    return (
        <ul>
        {
            products.map((item,index)=> <ProductItem key={index} product={item} />)
        }
        </ul>
    )
}

export default ProductList;