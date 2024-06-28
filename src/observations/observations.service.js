const knex = require("../db/connection");

function create(newObservation) {
    console.log("in observations.service");
  return knex("observations").insert(newObservation).returning("*");
}

module.exports = {
  create,
};