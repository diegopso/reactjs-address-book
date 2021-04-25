import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow } from 'enzyme'
import MinimalHeader from '../MinimalHeader'

describe('Testing MinimalHeader component:', () => {
  it('Renders correctly.', () => {
    const wrapper = shallow(<MinimalHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
