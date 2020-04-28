import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Foods from './Components/Foods';
import Recipe from './Components/Recipe';
import './Components/Home.css';
import { Route, Link } from 'react-router-dom';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_RECIPE_KEY,

		APP_ID: 'd1c50906',
	};
	const [recipes, setRecipes] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [showFood, setShowFood] = useState(false);

	useEffect(() => {
		getRecipes(searchString);
	}, []);

	function getRecipes(searchString) {
		const url = `https://api.edamam.com/search?q=${searchString}&app_id=${searchOptions.APP_ID}&app_key=${searchOptions.key}&from=0&to=12&calories=500-1000`;

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response.hits)
				setRecipes(response.hits);
				setSearchString('');
			})
			.catch(console.error);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		getRecipes(searchString);
		setShowFood(!showFood);
	};

	const onChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<>
			<div className='header'>
				<Link to='/home' className='link'>
					<h1>Easy Cook Recipe</h1>
				</Link>
			</div>
			<Route
				path='/home'
				exact={true}
				render={() => {
					return (
						<Home
							onSubmit={onSubmit}
							onChange={onChange}
							searchString={searchString}
							recipes={recipes}
						/>
					);
				}}
			/>
			<Route
				path='/recipes/:label'
				render={(routerProps) => {
					return <Recipe match={routerProps.match} recipes={recipes} />;
				}}
			/>
			{/* <Route
				path='/recipes'
				exact={true}
				render={(props) => {
					return <Foods recipes={recipes} />;
				}}
			/> */}
			
		</>
	);
}

export default App;
