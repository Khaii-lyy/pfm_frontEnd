
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap your app with the Redux Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);


