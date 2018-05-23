'use strict'

const ownAll = require('own-all')
const ownValues = require('own-values')
const sbo = require('sbo')

module.exports = sbo((obj, {own, enumOnly} = {}) => (enumOnly ? Object.values : ownValues)(own ? obj : ownAll(obj)))
