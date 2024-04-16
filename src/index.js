import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store'; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);