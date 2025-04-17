const db = require("../db"); // Kết nối database
const bcrypt = require("bcrypt");

// Hàm lấy danh sách người dùng
exports.getAllUsers = async (req, res) => {
  try {
    // Truy vấn danh sách người dùng từ database với user_type = 1
    const users = await db("user").where({ user_type: 1 });

    return res.json(users); // Trả về danh sách người dùng
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Hàm lấy người dùng theo ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db("user").where({ user_id: id, user_type: 1 }).first();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user); // Trả về thông tin người dùng
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Hàm cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    user_name,
    user_email,
    user_phone,
    user_password,
    user_birth,
    user_gender,
    user_type,
  } = req.body;

  try {
    // Nếu có mật khẩu mới, mã hóa mật khẩu đó
    let hashedPassword = null;
    if (user_password) {
      hashedPassword = await bcrypt.hash(user_password, 10); // Mã hóa với độ khó là 10
    }

    const updatedData = {
      user_name,
      user_email,
      user_phone,
      user_birth,
      user_gender,
      user_type,
    };

    // Chỉ thêm hashedPassword vào dữ liệu cập nhật nếu có mật khẩu mới
    if (hashedPassword) {
      updatedData.user_password = hashedPassword;
    }

    const updatedRows = await db("user")
      .where({ user_id: id, user_type: 1 })
      .update(updatedData);

    if (updatedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Hàm xóa người dùng theo ID
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await db("user")
      .where({ user_id: id, user_type: 1 })
      .del();
    if (deletedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
