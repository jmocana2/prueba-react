import React from 'react';
import { shallow } from 'enzyme';
import Logo from '.';

it('dummy test', () => {
  const wrapper = shallow(<Logo />);
  expect(true).toBe(true);
});
