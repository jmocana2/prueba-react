import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

class Button extends PureComponent {
  render() {
    return (
      <StyledButton	small={this.props.small}>Pulsame!!</StyledButton>
    );
  }
}

Button.propTypes = {
  small: PropTypes.bool
};

Button.defaultProps = {
  small: false
};

export default Button;
