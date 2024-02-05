const path = require('path')

const dinerGetLink = (req, res) => {
  const resetPassHTML = path.resolve(__dirname, '../../public/reset.html')
  res.sendFile(resetPassHTML)
}
const receptionistGetLink = (req, res) => {
  const resetPassHTML = path.resolve(__dirname, '../../public/reset.html')
  res.sendFile(resetPassHTML)
}
const adminGetLink = (req, res) => {
  const resetPassHTML = path.resolve(__dirname, '../../public/reset.html')
  res.sendFile(resetPassHTML)
}
const chefGetLink = (req, res) => {
  const resetPassHTML = path.resolve(__dirname, '../../public/reset.html')
  res.sendFile(resetPassHTML)
}
module.exports = {
  dinerGetLink,
  receptionistGetLink,
  chefGetLink,
  adminGetLink,
}
