import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow } from 'enzyme'
import DetailsModal from '../DetailsModal'

describe('Testing DetailsModal component:', () => {
  const userMock = {
    name: {
      first: 'brad',
      last: 'gibson'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    },
    location: {
      street: {
        number: 9278,
        name: 'New road'
      },
      city: 'kilcoole',
      state: 'waterford',
      postcode: '93027',
      country: 'Spain'
    }
  }

  it('Renders correctly.', () => {
    const wrapper = shallow(<DetailsModal user={userMock} />)
    expect(wrapper).toMatchSnapshot()
  })
})
