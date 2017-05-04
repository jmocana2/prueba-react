import React from 'react';
import styled from 'styled-components';

const styledLi = styled.li`
  font: normal 16px/15px 'Arial, sans-serif';
  color: ${props => props.activate ? 'palevioletred' : '#000'};
  padding: 5px;
`;

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <styledLi>Item1</styledLi>
  );
}