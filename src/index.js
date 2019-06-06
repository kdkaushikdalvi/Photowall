import React from 'react';
import ReactDom from 'react-dom';
import Main from './Components/Main';
import App from './Components/app';
import {BrowserRouter} from 'react-router-dom';
import './styles/stylesheet.css';

// Redux
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let root = document.getElementById('root');

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,root);