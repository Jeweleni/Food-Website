import React from "react"
import './App.css';
import Meal from "./Components/Meal"
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RecipeInfo from "./Components/RecipeInfo";



function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Meal/>}/>
    <Route path="/:MealId" element={<RecipeInfo/>}/>
    </Routes>
    </Router>
    
    
     </>
  );
}

export default App;
