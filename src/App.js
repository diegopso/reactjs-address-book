import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/css/App.css'

import { Home, Settings } from './pages'

function App () {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </Router>
  )
}

export default App
