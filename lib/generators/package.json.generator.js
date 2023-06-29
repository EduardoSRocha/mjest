//generate package.json
import { createFile } from './utils/structures/index.js'
import { insertContent } from './utils/index.js'

const generatePackageJsonMetadata = (projectName, description) => {
  const content = {
    'name': projectName,
    'version': '1.0.0',
    'description': description,
    'main': 'src/index.js'
  }

  return content
}

const generatePackageJsonScripts = () => {
  const content = {
    'scripts': {
      'test': 'jest',
      'clean': 'rm -Rf ./dist',
      'build': 'npm run clean; babel ./src --out-dir ./dist --copy-files',
      'coverage': 'npm test -- --coverage',
      'lint': 'eslint src'
    }
  }

  return content
}

const generatePackageJsonDevDependencies = () => {
  const content = {
    'devDependencies': {
      '@babel/cli': '^7.17.6',
      '@babel/eslint-parser': '^7.16.5',
      'babel-eslint': '^10.1.0',
      'babel-jest': '^25.1.0',
      'cross-env': '^7.0.2',
      'eslint': '^8.8.0',
      'eslint-config-standard': '^14.1.0',
      'eslint-plugin-import': '^2.20.0',
      'eslint-plugin-jest': '^26.0.0',
      'eslint-plugin-node': '^11.0.0',
      'eslint-plugin-promise': '^4.2.0',
      'eslint-plugin-standard': '^4.0.1',
      'git-commit-msg-linter': '^4.1.2',
      'jest-cli': '^27.4.7',
      'nodemon': '^2.0.2',
      'supertest': '^4.0.2',
      'mongoose-express-sanitizer': '^2.0.0',
    }
  }

  return content
}

const generatePackageJsonJestConfig = () => {
  const content = {
    'jest': {
      'testEnvironment': 'node',
      'testRunner': 'jasmine2'
    }
  }

  return content
}

const generatePackageJsonFilesStructure = () => {
  const content = {
    'files': [
      'dist',
      'src'
    ]
  }

  return content
}

const generatePackageJson = (projectName, description) => {
  const metaData = generatePackageJsonMetadata(projectName, description)
  const scripts = generatePackageJsonScripts()
  const devDependencies = generatePackageJsonDevDependencies()
  const jestConfig = generatePackageJsonJestConfig()
  const filesStructure = generatePackageJsonFilesStructure()

  const content = {
    ...metaData,
    ...scripts,
    ...filesStructure,
    ...jestConfig,
    ...devDependencies
  }

  createFile(`${projectName}/package.json`, JSON.stringify(content, null, 2))
  insertContent(`${projectName}/package.json`, '"keywords": [],', '"keywords": [],\n  "author": "Seu nome",\n  "license": "ISC",')
}

export default generatePackageJson