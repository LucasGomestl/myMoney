import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './main/reducer'

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))