import { describe, it, expect, jest } from '@jest/globals'
import { RandomUser } from '../RandomUser'
import axios from 'axios'
import randomUserRequestMock from '../__mocks__/randomUserRequestMock.json'

jest.mock('axios')

describe('Testing RandomUser API adapter:', () => {
  it('Makes a request to the API.', () => {
    // axios.get.mockResolvedValue({
    //   status: 200,
    //   data: randomUserRequestMock
    // })

    const request = jest.spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve({
        status: 200,
        data: randomUserRequestMock
      }))

    return RandomUser.paginate(1, 50, ['CH', 'ES', 'FR', 'GB'], false).then((result) => {
      expect(result.status).toBe(200)
      expect(result.data).toEqual(randomUserRequestMock)
      expect(request).toHaveBeenCalledTimes(1)
    })
  })
})
