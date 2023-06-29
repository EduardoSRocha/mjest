
const fs = require('fs')
const createSchemaDefinition = require('../utils/structures/createSchemaDefinition')

function generateMongooseSchemaFile(fileName, schemaName, fields) {
  const schemaDefinition = createSchemaDefinition(fields)

  const schemaCode = `
    const mongoose = require('mongoose');

    const ${schemaName}Schema = new mongoose.Schema(${JSON.stringify(schemaDefinition)});

    const ${schemaName}Model = mongoose.model('${schemaName}', ${schemaName}Schema);

    module.exports = {
      ${schemaName}Schema,
      ${schemaName}Model
    };
  `

  fs.writeFileSync(fileName, schemaCode)
}

module.exports = generateMongooseSchemaFile
