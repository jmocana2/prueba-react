import React from 'react';
import styled from 'styled-components';
import styledHeader from '../organisms/styledHeader'; 

export default () => {
  // Render these styled components like normal react components. They will pass on all props and work
  // like normal react components – except they're styled!
  return (
    <styledHeader />
  );
}