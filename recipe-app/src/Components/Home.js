import React from 'react';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Search from './Search.js';
import Foods from './Foods';

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
function Home() {
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
