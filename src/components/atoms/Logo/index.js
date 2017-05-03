import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  margin: 0 auto;
`;

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <Logo><img src="http://cadenaser00.epimg.net/ser/imagenes/2017/05/02/television/1493731075_712962_1493731585_sumario_normal.jpg" alt="antena3" width="200" height="220"/></Logo>
  );
}