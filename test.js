'use strict'

const assert = require('assert')
const isArrayWith = require('is-array-with')
const values = require('.')

describe('propValues()', function () {
  it('should return an array', function () {
    assert(Array.isArray(values({})))
  })

  it('should return an object’s own property values', function () {
    assert(values({key: 'value'}).some(v => v === 'value'))
  })

  it('should return an object’s inherited property values', function () {
    assert(values({key: 'value'}).some(v => typeof v === 'function'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(isArrayWith(values({key: 'value'}, {own: true}), 'value'))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'own'}
    Object.defineProperty(obj, 'nonEnum', {value: 'nonEnum', enumerable: false})
    assert(values(obj).some(v => v === 'nonEnum'))
    assert(!values(obj, {enumOnly: true}).some(v => v === 'nonEnum'))
  })

  it('should support the bind operator', function () {
    assert(values.call({key: 'value'}).some(v => v === 'value'))
  })
})
