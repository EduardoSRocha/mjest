
const fs = require('fs')

function createDockerFile() {
  const serverConfigCode = `
    FROM node:12.18.3-alpine

    WORKDIR /usr/src/app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD [ "npm", "start" ]
  `

  fs.writeFileSync('DockerFile', serverConfigCode)
}

module.exports = createDockerFile
