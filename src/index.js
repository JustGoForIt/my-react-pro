import React from 'react'
import ReactDOM from 'react-dom'
import App from './jianshu/App'
import store from './jianshu/store'
import { Provider } from 'react-redux'
debugger
const 	jianshu = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jianshu, document.getElementById('root'))
