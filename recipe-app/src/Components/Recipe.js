import React from 'react'

function Recipe (props) {
    return (
			<div className='image'>
				<img src={props.image} />
				<p className='recipe-title'>{props.name}</p>
			</div>
		);
}
export default Recipe