import React from 'react';
import './Recipe.css'

function Recipe(props) {
	console.log(props);
	const recipes = props.recipes;

	let recipe;
	for (let i = 0; i < recipes.length; i++) {
		if (props.match.params.label === recipes[i].recipe.label) {
            recipe = recipes[i];
           
        }
    }
    
	return (
		<div>
			<div>
				<img src={recipe.recipe.image} className='single-image'/>
			</div>
		</div>
	);
}
export default Recipe;
