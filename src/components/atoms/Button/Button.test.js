import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

it('dummy test', () => {
  const wrapper = shallow(<Button />);
  expect(true).toBe(true);
});
