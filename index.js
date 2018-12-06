module.exports = function unwrap (value, errorMessage) {
  if (value === null || value === undefined) {
    throw new Error(errorMessage || 'Missing value')
  } else {
    return value
  }
}
