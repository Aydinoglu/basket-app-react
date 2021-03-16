// import CategoryList from "./components/category/CategoryList";
import {useState} from 'react';
import ProductList from "./components/product/ProductList";
import BasketList from "./components/basket/BasketList";
import CategoryListClass from "./components/category/CategoryListClass";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  let selectCategory = (category)=>{
    setSelectedCategory(category.id);
}
  return (
      <div style={{display:"flex"}} >
        
        {/* <CategoryList selectCategory={selectCategory}/> */}

        <CategoryListClass selectCategory={selectCategory} /> 
        <ProductList  selectedCategory={selectedCategory} />
        <BasketList/>
    </div>
  );
}

export default App;
