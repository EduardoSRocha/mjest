import fs from 'fs'
import colors from 'colors'

const createDirectory = (directoryName) => 
  fs.promises.mkdir(directoryName, { recursive: true })
    .then(() => {
      console.log(colors.green(`Directory ${directoryName} created successfully!`))
    })
    .catch((err) => {
      console.error(colors.red(`Error on create directory: ${err}`))
      
      throw {
        message: `Error on create directory: ${err}`}
    }
    )

const deleteDirectory = (directoryName) => 
  fs.promises.rmdir(directoryName)
    .then(() => {
      console.log(colors.green(`Directory ${directoryName} deleted successfully!`))
    })
    .catch((err) => {
      console.error(colors.red(`Error on delete directory: ${err}`))
      throw {
        message: `Error on create directory: ${err}`}
    })

module.exports = {
  createDirectory,
  deleteDirectory
}