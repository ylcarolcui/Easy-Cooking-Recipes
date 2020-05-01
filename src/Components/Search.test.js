import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
	it("should have <button> ", () => {
		const component = shallow(<Search />);
		expect(component.find('.home').length).toBe(1);
	});
});
