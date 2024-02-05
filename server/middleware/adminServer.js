const { errorFilePath } = require('../utils/errors')

const subPath = (req, res, next) => {
  if (req.params.subpath !== process.env.ADMIN) {
    const $errorFilePath = errorFilePath()
    return res.status(404).sendFile($errorFilePath)
  }
  next()
}
const verifyAdmin = (req, res, next) => {
  next()
}
module.exports = { subPath, verifyAdmin }
