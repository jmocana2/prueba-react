import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { HashRouter, Match } from 'react-router';

//organism
import Header from '../core/organisms/Header'; 
import Main from '../core/organisms/Main'; 
import Footer from '../core/organisms/Footer'; 

//atoms
import Button from '../core/atoms/Button'; 
import Date from '../core/atoms/Date'; 
import Logo from '../core/atoms/Logo'; 
import Tooltip from '../core/atoms/Tooltip'; 

const App = () => <div>
    <Button />
    <Button small/>
    <ReactARIAToolTip message="Tooltip text" eventType="hover" direction="bottom" bgcolor="#333">
        <span>Some text</span>
    </ReactARIAToolTip>
</div>                
                
export default App;
