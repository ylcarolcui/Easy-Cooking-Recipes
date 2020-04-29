import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Recipe from './Components/Recipe';
import Search from './Components/Search';
import './Components/Home.css';
import { Route, Link, useHistory } from 'react-router-dom';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_RECIPE_KEY,

		APP_ID: process.env.REACT_APP_RECIPE_ID,
	};
	let history = useHistory();
	const [recipes, setRecipes] = useState([]);
	const [searchString, setSearchString] = useState('');
	const [showFood, setShowFood] = useState(false);

	useEffect(() => {
		getRecipes(searchString);
	}, []);

	function getRecipes(searchString) {
		const url = `https://api.edamam.com/search?q=${searchString}&app_id=${searchOptions.APP_ID}&app_key=${searchOptions.key}&from=0&to=12&calories=500-1000`;
		console.log(url);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setRecipes(response.hits);
				setSearchString('');
				console.log(response.hits);
			})
			.catch(console.error);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		getRecipes(searchString);
		console.log(searchString);
		history.push('/recipes');
		// setShowFood(!showFood);
	};

	const onChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<>
			<div className='header'>
				<Link to='/recipes' className='link'>
					<h1 className='main-header'>Easy Cooking Recipes</h1>
				</Link>
			</div>
			<Search
				onSubmit={onSubmit}
				onChange={onChange}
				searchString={searchString}
			/>
			<Route
				path='/recipes'
				exact={true}
				render={() => {
					return (
						<Home
							// onSubmit={onSubmit}
							// onChange={onChange}
							// searchString={searchString}
							recipes={recipes}
						/>
					);
				}}
			/>
			<Route
				path='/recipes/:name'
				render={(routerProps) => {
					return <Recipe match={routerProps.match} recipes={recipes} />;
				}}
			/>
		</>
	);
}

export default App;
