import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { DogStore } from './stores/DogStore'

const dogStore = new DogStore();

ReactDOM.render(
  <Provider dogStore={dogStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);