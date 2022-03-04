const Pool = require("pg").Pool;
const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "example1",
  user: "postgres",
  password: "2121",
});

module.exports = creds;
