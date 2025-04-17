const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig);

// Kiểm tra kết nối
db.raw("SELECT 1")
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.error("Database connection error:", err));

module.exports = db;
