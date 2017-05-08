import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

it('dummy test', () => {
  const wrapper = shallow(<App />);
  expect(true).toBe(true);
});
