# prop-values

Returns an array of the values of all properties (owned and inherited) of an object.

## Installation

Requires [Node.js](https://nodejs.org/) 7.0.0 or above.

```bash
npm i prop-values
```

## API

The module exports a single function.

### Parameters

1. Bindable: `obj` (object): The object whose property values you want to get.
2. Object argument:
   * Optional: `own` (boolean): If set to `true`, only the object’s “[own](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)” property values are returned. If omitted or if set to `false`, both owned and inherited property values are returned.
   * Optional: `enumOnly` (boolean): If set to `true`, only the values of properties defined with the `enumerable` flag will be returned.

### Return Value

An array of values of object properties.

## Example

```javascript
const values = require('prop-values')

values({key: 'value'}, {own: true}) // ['value']
```

## Related

* [prop-entries](https://github.com/lamansky/prop-entries): Same as this module, except it returns key-value pairs.
* [prop-keys](https://github.com/lamansky/prop-keys): Same as this module, except it returns keys.
* [values-array](https://github.com/lamansky/values-array): Supports more than just Objects.
