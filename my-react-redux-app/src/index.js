import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import todoApp from './reducers'

const app = document.getElementById('root')
const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
app);

registerServiceWorker();
