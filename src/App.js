import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/styles/App.scss'

import { Provider } from 'react-redux'
import store from './store'

import { Home, Settings } from './pages'

function App () {
  useEffect(() => {
    document.title = 'Address Book'
  })
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/settings" component={Settings} />
      </Router>
    </Provider>
  )
}

export default App
