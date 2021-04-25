import React from 'react'
import { describe, it, expect } from '@jest/globals'
import Settings from '../Settings'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import store from '../../store'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Testing Settings component:', () => {
  it('Renders correctly.', () => {
    const wrapper = render(
      <Router>
        <Provider store={store}>
          <Settings />
        </Provider>
      </Router>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
