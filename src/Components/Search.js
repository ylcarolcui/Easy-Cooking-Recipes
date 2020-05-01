import React from 'react'
function Search (props) {
  return (
		<div className='home'>
			<form className='form' onSubmit={props.onSubmit}>
				<input
					placeholder='Search food'
					type='text'
					name='searchString'
					required
					autoComplete='off'
					onChange={props.onChange}
					value={props.searchString}
				/>
				<button type='submit' value='search'>
					Search
				</button>
			</form>
		</div>
	);
}
export default Search