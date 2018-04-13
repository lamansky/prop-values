'use strict'

const ownAll = require('own-all')
const ownValues = require('own-values')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator((obj, {own, enumOnly} = {}) => (enumOnly ? Object.values : ownValues)(own ? obj : ownAll(obj))[Symbol.iterator]())
