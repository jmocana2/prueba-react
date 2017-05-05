import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './style';

const List = () => <StyledList>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
    <li>item5</li>  
</StyledList>;

List.propTypes = {};

List.defaultProps = {};

export default List;
