import React, { useState, useEffect } from 'react';
import Recipe from './Components/Recipe';
import Search from './Components/Search';
import Foods from './Components/Foods';
import Footer from './Components/Footer';
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
	const [lastSearch, setLastSearch] = useState('');

	useEffect(() => {
		getRecipes(searchString);
		console.log('useeffect is called');
		return setSearchString('');
	}, []);

	function getRecipes(searchString) {
		const url = `https://api.edamam.com/search?q=${searchString}&app_id=${searchOptions.APP_ID}&app_key=${searchOptions.key}&from=0&to=20&calories=500-1000`;
		console.log(url);

		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setRecipes(response.hits);
				setLastSearch(searchString);
				setSearchString('');
				console.log(response.hits);
			})
			.catch(console.error);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		getRecipes(searchString);
		console.log(searchString);
		history.push('/');
	};

	const onChange = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<>
			<header className='header'>
				<Link to='/' className='link'>
					<h1 className='main-header'>Easy Cooking Recipes</h1>
				</Link>
			</header>
			<Search
				onSubmit={onSubmit}
				onChange={onChange}
				searchString={searchString}
			/>
			<Route
				path='/'
				exact={true}
				render={() => {
					return (
						<Foods
							// onSubmit={onSubmit}
							// onChange={onChange}
							getRecipes={getRecipes}
							searchString={searchString}
							lastSearch={lastSearch}
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
			<Footer />
		</>
	);
}

export default App;
