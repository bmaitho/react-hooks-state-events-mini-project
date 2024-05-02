import { useState,useEffect } from "react";
import React from "react";

function CategoryFilter({Categories,setDisplay,display}) {
  const [selectedCategory, setSelectedCategory]=useState("All")
  useEffect(()=>{
    if(selectedCategory === "All"){
      console.log(selectedCategory)
    }else {
      console.log(selectedCategory)
      setDisplay(display.filter((item)=>item.category ===  selectedCategory))
    }
  },[selectedCategory,display,setDisplay])
  function handleClick (category){
  setSelectedCategory(category)
}  
function pickCategory (){
  return(
  Categories.map((category,index)=>(
    <button 
    key={index} 
    onClick={()=>handleClick(category)}
    className={selectedCategory === category ?"selected":null}
    >
    {category}
    </button>
    )))
}
return (
  <div className="categories">
    <h5>Category filters</h5>
    {/* render <button> elements for each category here */}
    {pickCategory()}
  </div>
);
}

export default CategoryFilter