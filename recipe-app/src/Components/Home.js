import React from 'react';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


// const photos = [
// 	{
// 		name: 'first image',
// 		url: 'https://i.imgur.com/SZoNRuw.jpg',
// 	},
// 	{
// 		name: 'second image',
// 		url: 'https://i.imgur.com/inq1jU8.jpg',
// 	},
// 	{
// 		name: 'third image',
// 		url: 'https://i.imgur.com/d037V7v.jpg',
// 	},
// ];
function Home (props) {
	// const settings = {
	// 	dots: true,
	// 	fade: true,
	// 	speed: 500,
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	arrows: true,
	// 	slidesToScroll: 1,
	// 	className: 'slides',
	// };
	return (
		<>
			<div className='home'>
				<form className='form' onSubmit={props.onSubmit}>
					<input
						placeholder='Search food'
						type='text'
						name='searchString'
                        required
						autoComplete="off"
						onChange={props.onChange}
						value={props.searchString}
					/>
					<button type='submit' value='search'>Search</button>
				</form>
			</div>
			{/* <div className='image'>
				<Slider {...settings}>
					{photos.map((photo, idx) => {
						return (
							<div>
								<img
									src={photo.url}
									alt={photo.name}
									key={idx}
									className='home-image'
								/>
							</div>
						);
					})}
				</Slider>
			</div> */}
		</>
	);
}
export default Home;
