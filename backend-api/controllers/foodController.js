const db = require("../db"); // Import kết nối đến database

// Hàm lấy danh sách món ăn
const getFoods = async (req, res) => {
  try {
    const foods = await db("food").select("*");
    res.json(foods);
  } catch (err) {
    console.error("Error retrieving foods:", err);
    res.status(500).json({ message: "Error retrieving foods." });
  }
};

// Hàm tạo món ăn
const createFood = async (req, res) => {
  const {
    food_name,
    food_price,
    food_discount,
    food_desc,
    food_status,
    food_type,
  } = req.body;
  const food_src = req.file ? req.file.path : null; // Lưu đường dẫn file nếu có

  try {
    // Kiểm tra món ăn đã tồn tại
    const existingFood = await db("food").where({ food_name }).first();
    if (existingFood) {
      return res.status(400).json({ message: "Food already exists." });
    }

    const [foodId] = await db("food").insert({
      food_name,
      food_price,
      food_discount,
      food_desc,
      food_status,
      food_type,
      food_src,
    });

    res.status(201).json({ message: "Food created successfully.", foodId });
  } catch (err) {
    console.error("Error creating food:", err);
    res
      .status(500)
      .json({ message: "Error creating food.", error: err.message });
  }
};
// Hàm lấy thông tin món ăn theo ID
const getFoodById = async (req, res) => {
  const foodId = req.params.id; // Lấy ID từ params

  try {
    // Tìm món ăn theo ID
    const foodItem = await db("food").where({ food_id: foodId }).first(); // Sử dụng trường khóa chính trong bảng

    if (!foodItem) {
      return res.status(404).json({ message: "Food not found." }); // Không tìm thấy món ăn
    }

    res.json(foodItem); // Trả về thông tin món ăn
  } catch (err) {
    console.error("Error retrieving food details:", err);
    res.status(500).json({ message: "Error retrieving food details." });
  }
};
// Hàm xóa món ăn theo ID
const deleteFood = async (req, res) => {
  const foodId = req.params.id; // Lấy ID từ params

  try {
    // Xóa món ăn theo ID
    const deleted = await db("food").where({ food_id: foodId }).del();

    if (deleted) {
      return res.status(200).json({ message: "Food deleted successfully." }); // Xóa thành công
    } else {
      return res.status(404).json({ message: "Food not found." }); // Không tìm thấy món ăn
    }
  } catch (err) {
    console.error("Error deleting food:", err);
    res.status(500).json({ message: "Error deleting food." });
  }
};
const updateFood = async (req, res) => {
  const foodId = req.params.id; // Lấy ID từ params
  const {
    food_name,
    food_price,
    food_discount,
    food_desc,
    food_status,
    food_type,
  } = req.body;
  const food_src = req.file ? req.file.path : null; // Lưu đường dẫn file nếu có

  try {
    // Kiểm tra món ăn có tồn tại không
    const existingFood = await db("food").where({ food_id: foodId }).first();

    if (!existingFood) {
      return res.status(404).json({ message: "Food not found." }); // Không tìm thấy món ăn
    }

    // Cập nhật thông tin món ăn
    await db("food").where({ food_id: foodId }).update({
      food_name,
      food_price,
      food_discount,
      food_desc,
      food_status,
      food_type,
      food_src,
    });

    res.status(200).json({ message: "Food updated successfully." }); // Cập nhật thành công
  } catch (err) {
    console.error("Error updating food:", err);
    res.status(500).json({ message: "Error updating food." });
  }
};
module.exports = {
  getFoods,
  createFood,
  getFoodById,
  deleteFood,
  updateFood,
};
