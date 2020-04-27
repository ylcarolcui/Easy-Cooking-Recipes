import React from 'react';
import './Food.css'
import Recipe from './Recipe'

function Foods({recipes}) {
	return (
		<div className="recipes">
			{recipes !== [] && recipes.map(recipe => {
                return (
				<Recipe key={recipe.recipe.label} image={recipe.recipe.image} name={recipe.recipe.label}/>)
})}
        </div>
        
    );
}


export default Foods;
