import { createContext,useState } from "react";



const GlobalContext = createContext();

const GlobalProvider = ({children})=>{
    const [basketProducts, setBasketProducts] = useState([]);

    let addBasket = (product)=>{
        basketProducts.push(product);
        setBasketProducts([...basketProducts]);
    }

    let values = {
        basketProducts,
        addBasket
    }

    return (
                <GlobalContext.Provider value={values}>
                    {children}
                </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext};
