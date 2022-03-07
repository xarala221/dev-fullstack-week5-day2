const myLogger = function (req, res, next) {
  console.log('Logger middleware')
  next()
}

module.exports = { myLogger }
