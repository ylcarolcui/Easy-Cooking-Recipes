import React from 'react';
import { shallow } from 'enzyme';
import Recipe from './Recipe';

describe('Recipe component', () => {
	let recipes = [
		{
			recipe: {
				uri:
					'http://www.edamam.com/ontologies/edamam.owl#recipe_ef0b7ade1aa054f89682bdee3881e3ea',
				label: 'Saffron Wild Rice',
				image:
					'https://www.edamam.com/web-img/bf0/bf0387256a2993f3c5ea1d32c9a75caf.jpg',
				source: 'BBC Good Food',
				url: 'http://www.bbcgoodfood.com/recipes/2087/',
				shareAs:
					'http://www.edamam.com/recipe/saffron-wild-rice-ef0b7ade1aa054f89682bdee3881e3ea/rice/500-1000-cal',
				yield: 4.0,
				dietLabels: ['Low-Fat'],
				healthLabels: [
					'Sugar-Conscious',
					'Vegan',
					'Vegetarian',
					'Peanut-Free',
					'Tree-Nut-Free',
					'Alcohol-Free',
				],
				cautions: ['FODMAP'],
				ingredientLines: [
					'good pinch of saffron',
					'600.0ml hot vegetable stock',
					'300.0g basmati rice and wild rice (Tilda is a good choice)',
				],
				ingredients: [
					{
						text: 'good pinch of saffron',
						weight: 0.043750000056215814,
					},
					{
						text: '600.0ml hot vegetable stock',
						weight: 575.683736498877,
					},
					{
						text: '300.0g basmati rice and wild rice (Tilda is a good choice)',
						weight: 300.0,
					},
					{
						text: '300.0g basmati rice and wild rice (Tilda is a good choice)',
						weight: 300.0,
					},
				],
			},
		},
	];
	const match = { params: { name: 'Saffron Wild Rice' } };
	it('should contain <h1>Saffron Wild Rice</h1>', () => {
		const component = shallow(<Recipe recipes={recipes} match={match} />);
		expect(component.contains(<h1>Saffron Wild Rice</h1>)).toBe(true);
	});
});
