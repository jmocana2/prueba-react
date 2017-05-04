import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { HashRouter, Match } from 'react-router';

import Header from '../organisms/Header'; 
import Main from '../organisms/Main'; 
import Footer from '../organisms/Footer'; 

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