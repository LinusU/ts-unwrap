module.exports = function unwrap (value) {
  if (value === null || value === undefined) {
    throw new Error('Missing value')
  } else {
    return value
  }
}
