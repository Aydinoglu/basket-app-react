import { Component } from "react";
import CategoryItem from "./CategoryItem";

class CategoryListClass extends Component {

       state={
            categories:[],
            name:"Sevda",
        }
  
    componentDidMount(){
        fetch("http://localhost:3000/categories")
        .then(res => res.json())
        .then(data => this.setState({categories:data}));
    }
   
    render(){
        let {selectCategory} = this.props;
        let {categories} = this.state;

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
    

}

 export default CategoryListClass;