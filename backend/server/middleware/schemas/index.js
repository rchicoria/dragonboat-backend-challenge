const fs = require('fs');
const Ajv = require('ajv');
const ajv = new Ajv({ jsonPointers: true });

const endpoints = {};
fs.readdirSync('./').forEach(function(file) {
  if (file.substr(-3) === '.js' && file !== 'index.js') {
    endpoints[file.substr(0, file.length - 3)] =
      ajv.compile(require('./' + file));
  }
});

module.exports = endpoints;
