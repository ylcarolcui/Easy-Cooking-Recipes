import React from 'react';

function Recipe(props) {
	console.log(props);
	const recipes = props.recipes;

	let recipe;
	for (let i = 0; i < recipes.length; i++) {
		if (props.match.params.label === recipes[i].label) {
			recipe = recipe[i];
		}
	}
	return (
		<div>
			<div>
				<img src={recipe.recipe.image} />
			</div>
		</div>
	);
}
export default Recipe;
