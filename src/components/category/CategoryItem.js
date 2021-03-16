const CategoryItem = ({category, selectFunc})=>{

    return (
        <li onClick={()=>selectFunc(category)}> {category.categoryName} </li>
    )
}


export default CategoryItem;