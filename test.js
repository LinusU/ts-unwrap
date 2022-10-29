import unwrap from './index.js'
import assert from 'node:assert'

unwrap(false)
unwrap(true)

unwrap(0)
unwrap(1)
unwrap(2)

unwrap('')
unwrap('test')

assert.throws(() => unwrap(), /Missing value/)
assert.throws(() => unwrap(undefined), /Missing value/)
assert.throws(() => unwrap(null), /Missing value/)

assert.throws(() => unwrap(null, 'Foobar test'), /Foobar test/)
