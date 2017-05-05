import styled, { keyframes }  from 'styled-components';

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
  from {
     transform: rotate(0deg) translate(10px, 10px);
  }

  to {
     transform: rotate(360deg) translate(20px, 10px );
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const StyledRotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 9s linear infinite;
`;

export { StyledRotate };
