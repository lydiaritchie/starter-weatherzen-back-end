const environment = process.env.NODE_ENV || "development";
console.log(environment);
const config = require("../../knexfile")[environment];
console.log("Config:");
console.log(config);
const knex = require("knex")(config);
console.log("knex:");
console.log(knex.insert);

module.exports = knex;