import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file for styling
import App from './App'; // Import your App component
import { Provider } from 'react-redux'; // Import Provider from React Redux
import store from './redux/store'; // Import the Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with the Redux Provider */}
    <App /> {/* Render your App component */}
  </Provider>,
  document.getElementById('root') // Mount the app in the root element of your HTML
);

