# Unwrap for TypeScript

A simple `unwrap` function for use with TypeScript.

## Installation

```sh
npm install --save ts-unwrap
```

## Usage

```js
import unwrap = require('ts-unwrap')

// `port` is of type string, and will never be undefined
const port = unwrap(process.env['PORT'])
```

## API

### `unwrap<T>(value?: T | null): T`

Throws an error if the value is `undefined` or `null`, otherwise it returns the value.
