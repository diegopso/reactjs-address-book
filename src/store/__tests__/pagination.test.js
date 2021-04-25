import { runSaga } from 'redux-saga'
import { RandomUser } from '../../adapters/RandomUser'
import { FILTER_USERS, NEXT_PAGE, NEXT_PAGE_SUCCESS, SEARCH } from '../pagination/actions'
import { describe, it, expect, jest } from '@jest/globals'
import randomUserRequestMock from '../../adapters/__mocks__/randomUserRequestMock.json'
import searchResultMock from './searchResultMock.json'
import { loadNextPage as loadNextPageSaga, search as searchSaga } from '../pagination/sagas'

describe('Testing pagination sagas:', () => {
  it('loadNextPage saga executes correctly.', async () => {
    const dispatched = []
    const requestPage = jest.spyOn(RandomUser, 'paginate')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        data: randomUserRequestMock
      }))

    const settingsMock = ['CH', 'ES', 'FR', 'GB']
    const paginationMock = {
      page: 0,
      maxPages: 20,
      usersPerPage: 50,
      empty: false,
      error: false,
      query: '',
      items: []
    }

    await runSaga({
      dispatch: (action) => {
        return dispatched.push(action)
      }
    }, loadNextPageSaga, {
      type: NEXT_PAGE,
      payload: {
        pagination: paginationMock,
        settings: settingsMock
      }
    })

    expect(requestPage).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([{
      type: NEXT_PAGE_SUCCESS,
      payload: randomUserRequestMock
    }])

    requestPage.mockClear()
  })

  it('searchSaga saga executes correctly.', async () => {
    const dispatched = []

    const dummyQuery = 'Est'

    await runSaga({
      getState: () => ({
        settings: ['CH', 'ES', 'FR', 'GB'],
        pagination: {
          page: 1,
          maxPages: 20,
          usersPerPage: 50,
          empty: false,
          error: false,
          query: '',
          items: randomUserRequestMock.results
        }
      }),
      dispatch: (action) => {
        return dispatched.push(action)
      }
    }, searchSaga, {
      type: SEARCH,
      payload: {
        query: dummyQuery
      }
    })

    expect(dispatched).toEqual([{
      type: FILTER_USERS,
      payload: { items: searchResultMock, query: dummyQuery }
    }])
  })
})
