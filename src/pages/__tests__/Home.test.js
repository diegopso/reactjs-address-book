import React from 'react'
import { describe, it, expect } from '@jest/globals'
import Home from '../Home'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../../store'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing Home component:', () => {
  it('Renders correctly.', () => {
    const wrapper = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
