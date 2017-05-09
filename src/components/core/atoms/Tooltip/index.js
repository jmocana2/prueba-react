import React from 'react';
import PropTypes from 'prop-types';
import { StyledTooltip } from './style';
import ReactARIAToolTip from 'react-aria-tooltip'
import Button from '../Button'

const Tooltip = () => <ReactARIAToolTip message="Mensaje del tooltip" direction="bottom" eventType="hover" bgcolor="blue" duration="5000">
   <Button small />
</ReactARIAToolTip>;

Tooltip.propTypes = {};

Tooltip.defaultProps = {};

export default Tooltip;
