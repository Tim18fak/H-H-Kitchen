const path = require('path')

// refactoring my code to be DRY
const errorFilePath = () => {
  const PageFilePath = path.join(__dirname, '../public/error.html')
  console.log(PageFilePath)
  return PageFilePath
}

module.exports = { errorFilePath }
