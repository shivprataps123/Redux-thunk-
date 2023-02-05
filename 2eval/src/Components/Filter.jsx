//import { includes } from "cypress/types/lodash";
import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams,setSearchParams]=useSearchParams();
  const initialCategory=searchParams.getAll('category');
  const [category,setCategory]=useState(initialCategory||[]);
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const handleClick=(e)=>{
    const option=e.target.value;
    let newCategory=[...category];
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1);
    }else{
      newCategory.push(option)
    }
    setCategory(newCategory)
  }
  useEffect(()=>{
    if(category){
      let params={}
      category&&(params.category=category)
      setSearchParams(params)
    }
  },[category,setSearchParams])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
          onChange={handleClick}
          defaultChecked={category.includes("Sneakers")}
          type="checkbox"
          value="Sneakers" />
          <label>Sneakers</label>
        </div>
        <div>
          <input 
           onChange={handleClick}
           defaultChecked={category.includes("Loafers")}
          type="checkbox" 
          value="Loafers" />
          <label>Loafers</label>
        </div>
        <div>
          <input
           onChange={handleClick}
           defaultChecked={category.includes("Canvas")}
           type="checkbox" 
           value="Canvas" />
          <label>Canvas</label>
        </div>
        <div>
          <input 
           onChange={handleClick}
           defaultChecked={category.includes("Boots")}
          type="checkbox" 
          value="Boots" />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
