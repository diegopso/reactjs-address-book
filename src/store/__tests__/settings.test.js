import { runSaga } from 'redux-saga'
import { NEXT_PAGE, RESET_PAGINATION } from '../pagination/actions'
import { describe, it, expect } from '@jest/globals'
import { disableCountry, enableCountry } from '../settings/sagas'
import randomUserRequestMock from '../../adapters/__mocks__/randomUserRequestMock.json'

describe('Testing pagination sagas:', () => {
  it('disableCountry saga executes correctly.', async () => {
    const dispatched = []

    const mockSettings = ['CH', 'ES', 'FR', 'GB']
    const mockPagination = {
      page: 1,
      maxPages: 20,
      usersPerPage: 50,
      empty: false,
      error: false,
      query: '',
      items: randomUserRequestMock.results
    }

    await runSaga({
      getState: () => ({
        settings: mockSettings,
        pagination: mockPagination
      }),
      dispatch: (action) => {
        return dispatched.push(action)
      }
    }, disableCountry, {
      code: 'GB'
    })

    expect(dispatched).toEqual([{
      type: RESET_PAGINATION
    }, {
      type: NEXT_PAGE,
      payload: {
        pagination: mockPagination,
        settings: mockSettings
      }
    }])
  })

  it('enableCountry saga executes correctly.', async () => {
    const dispatched = []

    const mockSettings = ['CH', 'ES', 'FR']
    const mockPagination = {
      page: 1,
      maxPages: 20,
      usersPerPage: 50,
      empty: false,
      error: false,
      query: '',
      items: randomUserRequestMock.results
    }

    await runSaga({
      getState: () => ({
        settings: mockSettings,
        pagination: mockPagination
      }),
      dispatch: (action) => {
        return dispatched.push(action)
      }
    }, enableCountry, {
      code: 'GB'
    })

    expect(dispatched).toEqual([{
      type: RESET_PAGINATION
    }, {
      type: NEXT_PAGE,
      payload: {
        pagination: mockPagination,
        settings: mockSettings
      }
    }])
  })
})
