import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 200px;
    background-color: ${(props) => props.theme.main || 'palevioletred'};
    color: #FFF;
    font: normal 12px/13px 'Arial', 'sans-serif';
    height: 50px;
`;

export { StyledButton };
