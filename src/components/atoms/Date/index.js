import React from 'react';
import styled from 'styled-components';

const MyDate = styled.time`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <MyDate dateTime="2017-05-03 10:38">Martes 3 de mayo de 2017</MyDate>
  );
}