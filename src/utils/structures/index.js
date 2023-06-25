import fs from 'fs';
import chalk from 'chalk';

const createDirectory = (directoryName) => 
  fs.promises.mkdir(directoryName, { recursive: true })
    .then(() => {
      console.log(chalk.green(`Directory ${directoryName} created successfully!`))
    })
    .catch((err) => {
      console.error(chalk.red(`Error on create directory: ${err}`));
      
      throw {
        message: `Error on create directory: ${err}`}
      }
    );

const deleteDirectory = (directoryName) => 
  fs.promises.rmdir(directoryName)
    .then(() => {
      console.log(chalk.green(`Directory ${directoryName} deleted successfully!`));
    })
    .catch((err) => {
      console.error(chalk.red(`Error on delete directory: ${err}`));
      throw {
        message: `Error on create directory: ${err}`}
    });


const createFile = (fileName, content) => 
    fs.promises.writeFile(fileName, content)
      .then(() => {
        console.log(chalk.green(`File ${fileName} created successfully!`))
      })
      .catch((err) => {
        console.error(chalk.red(`Error on create file: ${err}`))
        throw {
          message: `Error on create file: ${err}`}
      });


const deleteFile = (fileName) =>
      fs.promises.unlink(fileName)
        .then(() => {
          console.log(chalk.green(`File ${fileName} deleted successfully!`))
        })
        .catch((err) => {
          console.error(chalk.red(`Error on delete file: ${err}`))
          throw {
            message: `Error on delete file: ${err}`}
        });

module.exports = {
  createDirectory,
  deleteDirectory,
  createFile,
  deleteFile
}