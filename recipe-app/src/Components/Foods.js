import React from 'react';
import './Food.css';
import { Link } from 'react-router-dom'

function Foods(props) {
	console.log(props)
	if(!props.recipes) {
		return (
			<div>{props.searchString}</div>
		)
	}
	return (
		<>
		<p className="muted">
        Showing results for <strong>{props.lastSearch}</strong>
      </p>
		<div className='recipes'>
			{props.recipes !== [] &&
				props.recipes.map((recipe) => {
					return (
						<nav className='image' key={recipe.recipe.label}>
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
