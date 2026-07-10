import React from 'react';
import store from './store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './style.css';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
