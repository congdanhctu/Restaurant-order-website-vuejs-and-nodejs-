// knexfile.js
module.exports = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "restaurant",
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
