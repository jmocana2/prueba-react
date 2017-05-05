import React from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Match } from 'react-router';

import Header from '../core/organisms/Header'; 
import Main from '../core/organisms/Main'; 
import Footer from '../core/organisms/Footer'; 

// Set the theme to royalblue in this parent
const BlueSection = ({children}) => (
  <ThemeProvider theme={{
    main: 'royalblue'
  }}>
    { children }
  </ThemeProvider>
)

const App = () =>
    <HashRouter>
        <div>
            <Header />
            <Match exactly pattern='/' render={() => {
                return(
                    <p>Pantalla tweets</p>
                    )
                }
            } />

            <Match  pattern='/profile' render={() => {
                return(
                    <p>Pantalla perfil</p>
                    )
                }
            }  />
            <Footer />
        </div>
    </HashRouter>    

export default App;