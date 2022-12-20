import React, { useEffect, useState } from "react";
import "./style.css";
import MealType from "./MealType";
import RecipeIndex from "./RecipeIndex";


const Meal = ()=> {
    const[url,setUrl]= useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const[type, setType]= useState();
    const[show, setShow]= useState(false);
    const[search, setSearch]=useState("")
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setType(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>{
       setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }



    return(
     
        <div className="main">
            <div className="heading">
                <h1>Find a Meal</h1>
                <h4>lorem, ipsum dolor sit amet consectetur adipiscing elit. placeat veritatis dictum error qui</h4>

            </div>
            <div className="searchbox">
                <input type="search" className="searchbar"
                 onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
                

            </div>
            <div className="container">
                  {
                    show ? <MealType data={type}/>:"Not found"
                  }
                  
            </div>
            <div className="recipeContainer">
                  <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
        </div>
       
    )
}
export default Meal