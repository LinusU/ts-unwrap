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

// optionally specify a custom error message
const port = unwrap(process.env['PORT'], 'Missing PORT from environment')
```

## API

### `unwrap<T>(value: T | undefined | null, errorMessage?: string): T`

Throws an error if the value is `undefined` or `null`, otherwise it returns the value.

The description of the thrown error will be `'Missing value'` unless another message is passed as the `errorMessage` argument.

## Related Packages

- [`ts-todo`](https://github.com/LinusU/ts-todo)
- [`ts-unimplemented`](https://github.com/LinusU/ts-unimplemented)
- [`ts-unreachable`](https://github.com/LinusU/ts-unreachable)

## Prior Art

- Rust [`unwrap` method](https://doc.rust-lang.org/std/option/enum.Option.html#method.unwrap)
