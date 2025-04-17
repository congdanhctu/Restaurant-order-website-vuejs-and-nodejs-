const db = require("../db"); // Import kết nối đến database

// Lấy tất cả chương trình khuyến mãi
async function getAllPromotions(req, res) {
  try {
    const promotions = await db("promotions"); // Lấy tất cả các chương trình khuyến mãi
    return res.status(200).json(promotions);
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Lấy chương trình khuyến mãi theo ID
async function getPromotionById(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  try {
    const promotion = await db("promotions").where({ promo_id: id }).first(); // Lấy khuyến mãi theo ID
    if (!promotion) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    return res.status(200).json(promotion);
  } catch (error) {
    console.error("Error fetching promotion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Tạo một chương trình khuyến mãi mới
async function createPromotion(req, res) {
  const {
    promo_code,
    discount_percentage,
    start_date,
    end_date,
    status,
    description,
  } = req.body; // Lấy dữ liệu từ request body
  try {
    const [promo_id] = await db("promotions").insert({
      promo_code,
      discount_percentage,
      start_date,
      end_date,
      status,
      description,
    }); // Thêm chương trình khuyến mãi mới
    return res
      .status(201)
      .json({ promo_id, message: "Promotion created successfully" });
  } catch (error) {
    console.error("Error creating promotion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Cập nhật một chương trình khuyến mãi
async function updatePromotion(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  const {
    promo_code,
    discount_percentage,
    start_date,
    end_date,
    status,
    description,
  } = req.body; // Lấy dữ liệu từ request body
  try {
    const updatedRows = await db("promotions").where({ promo_id: id }).update({
      promo_code,
      discount_percentage,
      start_date,
      end_date,
      status,
      description,
    }); // Cập nhật chương trình khuyến mãi
    if (updatedRows === 0) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    return res.status(200).json({ message: "Promotion updated successfully" });
  } catch (error) {
    console.error("Error updating promotion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Xóa một chương trình khuyến mãi
async function deletePromotion(req, res) {
  const { id } = req.params; // Lấy ID từ tham số URL
  try {
    const deletedRows = await db("promotions").where({ promo_id: id }).del(); // Xóa chương trình khuyến mãi
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Promotion not found" });
    }
    return res.status(200).json({ message: "Promotion deleted successfully" });
  } catch (error) {
    console.error("Error deleting promotion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Kiểm tra mã khuyến mãi
async function checkPromotion(req, res) {
  const { promo_code } = req.body; // Lấy mã khuyến mãi từ request body
  try {
    const promotion = await db("promotions").where({ promo_code }).first(); // Kiểm tra mã khuyến mãi
    if (!promotion) {
      return res
        .status(404)
        .json({ valid: false, message: "Promotion not found" });
    }

    // Kiểm tra xem mã khuyến mãi có còn hiệu lực không
    const now = new Date();
    if (promotion.start_date > now || promotion.end_date < now) {
      return res
        .status(400)
        .json({ valid: false, message: "Promotion code is expired" });
    }

    return res.status(200).json({
      valid: true,
      discount_percentage: promotion.discount_percentage,
    });
  } catch (error) {
    console.error("Error checking promotion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
  checkPromotion,
};
