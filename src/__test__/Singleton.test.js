'use strict'

jest.disableAutomock()
import Singleton from '../singletonClass'

describe('Singleton', () => {
  it('deve ritornare sempre la stessa istanza', () => {
    let singleton1 = Singleton
    let singleton2 = Singleton
    expect(singleton1.name).toBe(singleton2.name)
  })
})
