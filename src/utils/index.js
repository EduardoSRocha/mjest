const fs = require('fs')
const chalk = require('chalk')

const insertContent = (fileName, content) => {
  fs.appendFile(fileName, content, (err) => {
    if (err) {
      console.error(chalk.red(`Error on insert content: ${err}`))
    } else {
      console.log(chalk.green(`Content inserted successfully on ${fileName}!`))
    }
  })
}

const deleteContent = (fileName, content) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(chalk.red(`Error on read file: ${err}`))
    } else {
      const newValue = data.replace(content, '')
      fs.writeFile(fileName, newValue, (err) => {
        if (err) {
          console.error(chalk.red(`Error on delete content: ${err}`))
        } else {
          console.log(chalk.green(`Content deleted successfully on ${fileName}!`))
        }
      })
    }
  })
}

const replaceContent = (fileName, content, newContent) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(chalk.red(`Erro ao ler o arquivo: ${err}`))
    } else {
      const newValue = data.replace(content, newContent)
      fs.writeFile(fileName, newValue, (err) => {
        if (err) {
          console.error(chalk.red(`Erro ao substituir o conteúdo: ${err}`))
        } else {
          console.log(chalk.green(`Content replaced successfully on ${fileName}!`))
        }
      })
    }
  })
}

const getContent = (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error(chalk.red(`Error on read file: ${err}`))
    } else {
      return data
    }
  })
}

module.exports = {
  insertContent,
  deleteContent,
  replaceContent,
  getContent
}