
const fs = require('fs')

function createServerConfig() {
  const serverConfigCode = `
    const swaggerAutogen = require('swagger-autogen')();
    const doc = require('./config/swagger');

    const outputFile = './src/swagger_documentation.json';
    const endpoints = ['./src/app/routes/estadio.js'];

    swaggerAutogen(outputFile, endpoints, doc);
  `

  fs.writeFileSync('swagger.js', serverConfigCode)
}

module.exports = createServerConfig
