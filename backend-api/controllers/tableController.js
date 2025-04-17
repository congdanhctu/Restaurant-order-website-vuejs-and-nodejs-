const db = require("../db"); // Import kết nối đến database

// Lấy tất cả bàn
async function getAllTables(req, res) {
  try {
    const tables = await db("table_info"); // Lấy dữ liệu từ bảng table_info
    return res.status(200).json(tables);
  } catch (error) {
    console.error("Error fetching tables:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Lấy bàn theo ID
async function getTableById(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  try {
    const table = await db("table_info").where({ table_id: id }).first(); // Lấy bảng theo ID
    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }
    return res.status(200).json(table);
  } catch (error) {
    console.error("Error fetching table:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Tạo một bàn mới
async function createTable(req, res) {
  const { table_number, table_status, table_capacity } = req.body; // Lấy dữ liệu từ request body
  try {
    const [table_id] = await db("table_info").insert({
      table_number,
      table_status,
      table_capacity,
    }); // Thêm bàn mới
    return res
      .status(201)
      .json({ table_id, message: "Table created successfully" });
  } catch (error) {
    console.error("Error creating table:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Cập nhật một bàn
async function updateTable(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  const { table_number, table_status, table_capacity } = req.body; // Lấy dữ liệu từ request body
  try {
    const updatedRows = await db("table_info").where({ table_id: id }).update({
      table_number,
      table_status,
      table_capacity,
    }); // Cập nhật bảng
    if (updatedRows === 0) {
      return res.status(404).json({ message: "Table not found" });
    }
    return res.status(200).json({ message: "Table updated successfully" });
  } catch (error) {
    console.error("Error updating table:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Xóa một bàn
async function deleteTable(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  try {
    const deletedRows = await db("table_info").where({ table_id: id }).del(); // Xóa bảng
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Table not found" });
    }
    return res.status(200).json({ message: "Table deleted successfully" });
  } catch (error) {
    console.error("Error deleting table:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
};
