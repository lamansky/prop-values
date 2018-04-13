'use strict'

const assert = require('assert')
const equals = require('equals')
const isIterator = require('is-iterator')
const values = require('.')

describe('propValues()', function () {
  it('should return an iterator', function () {
    assert(isIterator(values({})))
  })

  it('should iterate an object’s own property values', function () {
    assert(Array.from(values({key: 'value'})).some(v => v === 'value'))
  })

  it('should iterate an object’s inherited property values', function () {
    assert(Array.from(values({key: 'value'})).some(v => typeof v === 'function'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(equals(Array.from(values({key: 'value'}, {own: true})), ['value']))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'own'}
    Object.defineProperty(obj, 'nonEnum', {value: 'nonEnum', enumerable: false})
    assert(Array.from(values(obj)).some(v => v === 'nonEnum'))
    assert(!Array.from(values(obj, {enumOnly: true})).some(v => v === 'nonEnum'))
  })

  it('should support the bind operator', function () {
    assert(Array.from(values.call({key: 'value'})).some(v => v === 'value'))
  })
})
