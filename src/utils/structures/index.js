const fs = require('fs')
const chalk = require('chalk')

const createDirectory = (directoryName) => {
  fs.mkdir(directoryName, (err) => {
    if (err) {
      console.error(chalk.red(`Error on create directory: ${err}`))
    } else {
      console.log(chalk.green(`Directory ${directoryName} created successfully!`))
    }
  })
}

const deleteDirectory = (directoryName) => {
  fs.rmdir(directoryName, (err) => {
    if (err) {
      console.error(chalk.red(`Error on create directory: ${err}`))
    } else {
      console.log(chalk.green(`Directory ${directoryName} created successfully!`))
    }
  })
}

const createFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(chalk.red(`Error on create file: ${err}`))
    } else {
      console.log(chalk.green(`File ${fileName} created successfully!`))
    }
  })
}

const deleteFile = (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error(chalk.red(`Error on delete file: ${err}`))
    } else {
      console.log(chalk.green(`File ${fileName} deleted successfully!`))
    }
  })
}

module.exports = {
  createDirectory,
  deleteDirectory,
  createFile,
  deleteFile
}