/*NOTES*/

// Data => Redux
// View => React
// Presentation => ReactRedux

//A reducer is a function that returns a piece of the application state
//An application can have many pieces of state => Many different reducers

//React and Redux are two completely different libraries with no connection to one another
//To from a link between the two, another libary is needed: ReactRedux

//A container is a React component that has a direct connection to the state managed by Redux


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
