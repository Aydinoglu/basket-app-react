import {useState,useEffect} from 'react';
import CategoryItem from "./CategoryItem";

const CategoryList = ({selectCategory})=>{
 const [categories, setCategories] = useState([]);

 useEffect(() => {
    getCategories();
 },[])

 let getCategories = async ()=>{

    let response = await fetch("http://localhost:3000/categories");
    
    let data = await response.json();
   
    setCategories([...data]);
 }

let getCategoryItems = ()=>{
    let items =  categories.map((category,index) => <CategoryItem key={index} selectFunc={selectCategory} category={category} />)
    return items;
}



    return (
  <div>
      <h2>Categories</h2>
           <ul>
        {
            getCategoryItems()
        }
       </ul>
  </div>
    )
}

export default CategoryList;