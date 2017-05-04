import React from 'react';
import styled from 'styled-components';
import MyDate from '../../atoms/Date';
import Logo from '../../atoms/Logo';
import { styledHeader } from './style.js';

const Header = () => (
  <div>
      <styledHeader>
        <MyDate />
        <Logo />
      </styledHeader>
  </div>
);

export default Header;