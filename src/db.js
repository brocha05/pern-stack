const { Pool } = require("pg");

const db = new Pool({
  user: "admin",
  password: "digino666",
  host: "localhost",
  port: 5432,
  database: "pern_stack",
});

module.exports = db;
