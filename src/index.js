import React from 'react';
import { render } from 'react-dom';
import Root from './views/root';
import store from './store';

window.store = store;

render(<Root store={store}/>, document.getElementById('app-root'));
