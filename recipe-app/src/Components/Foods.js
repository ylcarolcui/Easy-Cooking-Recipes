import React from 'react';
import './Food.css';
import Recipe from './Recipe';
import { Link } from 'react-router-dom'

function Foods({ recipes }) {
	return (
		<div className='recipes'>
			{recipes !== [] &&
				recipes.map((recipe) => {
					return (
						<nav className='image' key={recipe.recipe.label}>
							<Link to={`recipe/${recipe.recipe.label}`} className='link'>
								<img src={recipe.recipe.image} alt={recipe.recipe.label} />
								<p className='recipe-title'>{recipe.recipe.label}</p>
							</Link>
						</nav>
					);
				})}
		</div>
	);
}

export default Foods;
