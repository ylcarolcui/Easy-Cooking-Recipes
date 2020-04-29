import React from 'react';
import './Recipe.css';

function Recipe(props) {
	const recipes = props.recipes;
	console.log(props);

	let recipe;
	for (let i = 0; i < recipes.length; i++) {
		if (props.match.params.label === recipes[i].recipe.label) {
			recipe = recipes[i];
		}
	}
const here = recipe.recipe.url
	return (
		<>
			<div>
				<h1 className='recipe-name'>{recipe.recipe.label}</h1>
				<img
					src={recipe.recipe.image}
					alt={recipe.recipe.label}
					className='recipe-image'
				/>
			</div>
			<ul >
				{recipe.recipe.ingredients.map((ingredient,idx) => {return (<li key={ingredient[idx]}>{ingredient.text}</li>)}
				)}
			</ul>
		<a href={here} target="_blank" rel="noopenner noreferrer">Please click here for more detailed information</a>
		</>
	);
}
export default Recipe;
