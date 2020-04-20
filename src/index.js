import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Cataglog from './Catalog';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App/>,  document.getElementById('root')
);

serviceWorker.unregister();
