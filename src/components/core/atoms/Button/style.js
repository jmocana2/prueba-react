import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 200px;
    background-color: #cc0000;
    color: #FFF;
    font: normal 12px/13px 'Arial', 'sans-serif';
    height: 50px;
    padding:  ${props => props.small ? '10px' : '50px'};
`;

export { StyledButton };
