function fixQuotes (array) {
  return array.map(string => {
    return string.replace(/\\'/g, "'")
  })
}

module.exports = {
  fixQuotes
}