import React from 'react'
import { describe, it, expect } from '@jest/globals'
import { shallow } from 'enzyme'
import UserCard from '../UserCard'

describe('Testing UserCard component:', () => {
  const userMock = {
    email: 'brad.gibson@example.com',
    name: {
      first: 'brad',
      last: 'gibson'
    },
    login: {
      username: 'silverswan131'
    },
    picture: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    }
  }

  it('Renders correctly.', () => {
    const wrapper = shallow(<UserCard user={userMock} />)
    expect(wrapper).toMatchSnapshot()
  })
})
