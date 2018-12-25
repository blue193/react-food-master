import React from 'react';
import { shallow } from 'enzyme';
import Submit from './Submit';

describe('<Submit /> component', () => {
    let wrapper, props = {
        meal: "lunch",
        numberOfPeople: "1",
        restaurant: "Mc Donalds",
        dishes: [{dish: 'Chicken Burger', servings: '3'}]
    }

    let component;

    beforeEach(() => {
        wrapper = shallow(<Submit {...props} />);
        component = wrapper.instance();
    });

    it('renders the Submit component', () => {
        expect(wrapper).toHaveLength(1);
    });
});