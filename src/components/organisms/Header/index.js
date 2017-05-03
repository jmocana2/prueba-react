import React from 'react';
import styled from 'styled-components';
import MyDate from '../../atoms/Date';
import Logo from '../../atoms/Logo';

const Header = styled.header`
  width: 995px
  margin: 0 auto;
  bacground-color: #EAEAEA;
`;

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
  	<div>
    <Header>
    	<MyDate />
    	<Logo />
    </Header>
    </div>
  );
}  