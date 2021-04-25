import React from 'react'
import { describe, it, expect, jest } from '@jest/globals'
import { shallow } from 'enzyme'
import UserList, { Loader } from '../UserList'
import store from '../../store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import axios from 'axios'
import randomUserRequestMock from '../../adapters/__mocks__/randomUserRequestMock.json'

jest.mock('axios')

describe('Testing Loader in UserList component:', () => {
  it('Renders correctly without error flag.', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders correctly with error flag.', () => {
    const wrapper = shallow(<Loader error={true} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Calls correct re-attempt function when in error mode.', () => {
    const onReattemptMock = jest.fn()
    const wrapper = shallow(<Loader error={true} onReattempt={onReattemptMock} />)
    const buttonElement = wrapper.find('Button')
    buttonElement.simulate('click')
    expect(onReattemptMock).toHaveBeenCalledTimes(1)
  })
})

describe('Testing UserList component:', () => {
  it('Renders correctly.', () => {
    axios.get.mockResolvedValue({
      status: 200,
      data: randomUserRequestMock
    })

    const wrapper = render(
      <Provider store={store}><UserList /></Provider>
    )

    return new Promise(resolve => setTimeout(() => {
      expect(wrapper).toMatchSnapshot()
      resolve()
    }, 100)) // although mocked, needs to wait for promises to resolve
  })
})
