import React, { useState } from "react";
import { useParams } from "react-router-dom";
const RecipeInfo = () => {
    const [type, setType]=useState();
    const {MealId}=useParams();
    if (MealId!=="")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setType(data.meals[0]);
    })
    }
    return ( 
        <>
           {
            (!type)?"":(<>
                <div className="content">
                    <img src={type.strMealThumb} alt=""/>
                    <div className="innercontent">
                        <h1>{type.strMeal}</h1>
                        <h2>{type.strArea} Food</h2>
                    </div>
                </div>
            </>)
           }
        </>
     );
}
 
export default RecipeInfo;