import React from  'react';
import ReactDOM from  'react-dom';
import AppRouter from './router/routers'
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'

const  store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        {AppRouter}
    </Provider>,document.getElementById('app'))