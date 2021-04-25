import { describe, it, expect } from '@jest/globals'
import { upperCaseFirst } from '../string'

describe('Testing String helper:', () => {
  it('Correclty changes first letter to upper case.', () => {
    const testStr = 'test'
    expect(upperCaseFirst(testStr)[0]).toBe('T')
  })
})
