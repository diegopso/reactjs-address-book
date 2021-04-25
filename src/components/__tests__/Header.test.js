import React from 'react'
import { describe, it, expect } from '@jest/globals'
import Header from '../Header'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../../store'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing Header component:', () => {
  it('Renders correctly.', () => {
    const wrapper = render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
