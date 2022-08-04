require('ts-node').register()
module.exports = require('./src/config/databaseconfig').Knex.config;