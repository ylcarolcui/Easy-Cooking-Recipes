import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function Foods(props) {
	
	useEffect(() => {
		return props.getRecipes('');
	}, []);

	return (
		<>
			<p className='muted'>
				Showing results for <strong>{props.lastSearch}</strong>
			</p>
			<div className='recipes'>
				{props.recipes !== [] &&
					props.recipes.map((recipe, idx) => {
						return (
							<nav className='image' key={idx}>
								<Link to={`/recipes/${recipe.recipe.label}`} className='link'>
									<img src={recipe.recipe.image} alt={recipe.recipe.label} />
									<p className='recipe-title'>{recipe.recipe.label}</p>
								</Link>
							</nav>
						);
					})}
			</div>
		</>
	);
}

export default Foods;
