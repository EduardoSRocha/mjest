
const fs = require('fs')

function createServerConfig(port, nameModule, nameProject) {
  const serverConfigCode = `
  module.exports = {
    info: {
      version: '1.0.0',
      title: '${nameProject} API',
      description: 'microservice ${nameModule} for ${nameProject}',
    },
    host: 'localhost:${port}',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      JWT: {
        description: 'JWT token',
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    definitions: {
    },
  };
  `

  fs.writeFileSync('swagger.js', serverConfigCode)
}

module.exports = createServerConfig
