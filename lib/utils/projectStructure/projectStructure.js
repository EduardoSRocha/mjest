// createProjectStructure.js

const createFolder = require('../fileSystem/folder')

function createProjectStructure() {
  createFolder('src')
  createFolder('src/commands')
  createFolder('src/generators')
  createFolder('src/utils')
  createFolder('src/utils/manipulators')
  createFolder('src/utils/structures')
}

module.exports = createProjectStructure