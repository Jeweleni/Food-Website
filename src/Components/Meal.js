import React, { useEffect, useState } from "react";
import "./style.css";
import MealType from "./MealType";
import Recipe from "./Recipe";


const Meal = ()=> {
    const[url,setUrl]= useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a');
    const[item, setItem]= useState();
    const[show, setShow]= useState(false);
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    },[url])

    const setRecipe=(alpha)=>{}
    return(
     
        <div className="main">
            <div className="heading">
                <h1>Find a Meal</h1>
                <h4>lorem, ipsum dolor sit amet consectetur adipiscing elit. placeat veritatis dictum error qui</h4>

            </div>
            <div className="searchbox">
                <input type="search" className="searchbar"/>
                

            </div>
            <div className="container">
                  {
                    show ? <MealType data={item}/>:"Not found"
                  }
                  
            </div>
            <div className="recipeContainer">
                  <Recipe alphaRecipe={(alpha)=>setRecipe(alpha)}/>
            </div>
        </div>
       
    )
}
export default Meal