import React, { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
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

    if (type){
        const strYoutube= type.strYoutube;
        const str=strYoutube.split("=");
        id=str[str.length-1];
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
                        <h3>Category {type.strCategory}</h3>
                    </div>
                </div>
                <div className="recipe-details">
                    <div className="ingredient">
                        <h2>Ingredients</h2>
                        <h4>{type.strIngredient1} :{type.strMeasure1}</h4>
                        <h4>{type.strIngredient2} :{type.strMeasure2}</h4>
                        <h4>{type.strIngredient3} :{type.strMeasure3}</h4>
                        <h4>{type.strIngredient4} :{type.strMeasure4}</h4>
                        <h4>{type.strIngredient5} :{type.strMeasure5}</h4>
                        <h4>{type.strIngredient6} :{type.strMeasure6}</h4>
                        <h4>{type.strIngredient7} :{type.strMeasure7}</h4>
                        <h4>{type.strIngredient8} :{type.strMeasure8}</h4>
                    </div>
                    </div>
                    <div className="instructions">
                        <h2>Instructions</h2>
                        <h4>{type.strInstructions}</h4>

                    </div>
                    <div className="video">
                        <iframe 
                        src={`https://www.youtube.com/embed/${id}`}>
                            
                        </iframe>
                    </div>
                
            </>)
           }
        </>
     );
}
 
export default RecipeInfo;