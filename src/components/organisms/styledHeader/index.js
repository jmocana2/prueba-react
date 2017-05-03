import React from 'react';
import styled from 'styled-components';
import styledDate from '../../atoms/styledDate';
import styledLogo from '../../atoms/styledLogo';
import { styledHeader } from './style.js';

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
  	<div>
      <styledHeader>
        <styledDate />
        <styledLogo />
      </styledHeader>
    </div>
  );
}  