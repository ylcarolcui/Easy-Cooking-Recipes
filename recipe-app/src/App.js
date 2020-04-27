import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Foods from './Components/Foods';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_RECIPE_KEY,
		
		APP_ID: 'd1c50906',
	};
const [recipes, setRecipes] = useState ([]);
	
	useEffect(() => {
		getRecipes();
	},[])
	
	function getRecipes() {
		const url = `https://api.edamam.com/search?q=pizza&app_id=${searchOptions.APP_ID}&app_key=${searchOptions.key}&from=0&to=10&calories=500-1000`;
		
		fetch(url) 
		.then((response) => response.json())
		.then((response) => {
			console.log(response.hits)
			setRecipes(response.hits)
		})
		.catch(console.error)
	}
	
	return (
		<>
			<Home />
			<Foods recipes={recipes}/>
		</>
	);
}

export default App;
