import React from 'react';
import './Recipe.css';

function Recipe(props) {
	const recipes = props.recipes;
	
	let recipe;
	for (let i = 0; i < recipes.length; i++) {
		if (props.match.params.name === recipes[i].recipe.label) {
			recipe = recipes[i];
		}
	}
	const here = recipe.recipe.url;
	return (
		<div className='recipe-info'>
			<div className='recipe-name'>
				<h1>{recipe.recipe.label}</h1>
				<img
					src={recipe.recipe.image}
					alt={recipe.recipe.label}
					className='recipe-image'
				/>
			</div>
			<div className='recipe-ingredient'>
				<ul>
					<h1>Ingredients:</h1>
					{recipe.recipe.ingredients.map((ingredient, idx) => {
						return <li key={idx}>{ingredient.text}</li>;
					})}
				</ul>
				<p className='more-info'>
					Please click
					<a href={here} target='_blank' rel='noopenner noreferrer'>
						{' '}
						here
					</a>{' '}
					for more detailed information.
				</p>
			</div>
		</div>
	);
}
export default Recipe;
