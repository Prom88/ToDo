import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/screens/Home/Home'
import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
  </Provider>
  </React.StrictMode>,
)
