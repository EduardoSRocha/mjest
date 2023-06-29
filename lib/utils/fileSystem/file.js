import fs from 'fs'
import colors from 'colors'
const createFile = (fileName, content) => 
  fs.promises.writeFile(fileName, content)
    .then(() => {
      console.log(colors.green(`File ${fileName} created successfully!`))
    })
    .catch((err) => {
      console.error(colors.red(`Error on create file: ${err}`))
      throw {
        message: `Error on create file: ${err}`}
    })

const updateFile = (fileName, content) =>
  fs.promises.writeFile(fileName, content)
    .then(() => {
      console.log(colors.green(`File ${fileName} updated successfully!`))
    })
    .catch((err) => {
      console.error(colors.red(`Error on update file: ${err}`))
      throw {
        message: `Error on update file: ${err}`}
    })

const readFile = (fileName) =>
  fs.promises.readFile(fileName, 'utf8')
    .then((data) => {
      console.log(colors.green(`File ${fileName} read successfully!`))
      return data
    })
    .catch((err) => {
      console.error(colors.red(`Error on read file: ${err}`))
      throw {
        message: `Error on read file: ${err}`}
    })

const deleteFile = (fileName) =>
  fs.promises.unlink(fileName)
    .then(() => {
      console.log(colors.green(`File ${fileName} deleted successfully!`))
    })
    .catch((err) => {
      console.error(colors.red(`Error on delete file: ${err}`))
      throw {
        message: `Error on delete file: ${err}`}
    })

module.exports = {
  createFile,
  deleteFile,
  readFile,
  updateFile,
}