import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './style';
import Logo from '../../atoms/Logo';
import Date from '../../atoms/Date';

const Header = () => <StyledHeader>
    <Logo />
    <Date />
</StyledHeader>;

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
