import React from 'react';
import {Provider} from 'react-redux';
import AboutContainer from '../containers/AboutContainer';
import { Route } from 'react-router-dom';

import store from '../store';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '../pages';

const Root = () => (
    
    <Provider store={store}>
    <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutContainer}/>       
    </BrowserRouter>
    </Provider>   
);

export default Root;